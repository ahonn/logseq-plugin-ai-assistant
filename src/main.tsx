import '@logseq/libs';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import {
  CustomListOutputParser,
  StructuredOutputParser,
} from 'langchain/output_parsers';
import * as presetPrompts from './prompts';
import { IPrompt, PromptOutputType } from './prompts/type';
import settings, { ISettings } from './settings';
import { getBlockContent } from './utils';

function getPrompts() {
  const { customPrompts } = logseq.settings as unknown as ISettings;
  const prompts = [...Object.values(presetPrompts)];
  if (customPrompts.enable) {
    prompts.push(...customPrompts.prompts);
  }
  return prompts;
}

function main() {
  const {
    apiKey,
    basePath,
    model: modelName,
    tag: tagName,
  } = logseq.settings as unknown as ISettings;
  const tag = tagName ? ` #${tagName}` : '';

  const prompts = getPrompts();
  const model = new ChatOpenAI(
    {
      openAIApiKey: apiKey,
      modelName,
      streaming: false,
    },
    { basePath },
  );

  prompts.map(({ name, system, user, output, format }: IPrompt) => {
    logseq.Editor.registerSlashCommand(
      name,
      async ({ uuid }: { uuid: string }) => {
        const block = await logseq.Editor.getBlock(uuid, {
          includeChildren: true,
        });
        if (!block) {
          return;
        }

        const content = await getBlockContent(block);
        const listed = Array.isArray(format);
        const structured = typeof format === 'object' && !listed;

        let parser;
        if (structured) {
          parser = StructuredOutputParser.fromNamesAndDescriptions(
            format as { [key: string]: string },
          );
        } else if (listed) {
          parser = new CustomListOutputParser({ separator: '\n' });
        }

        const template = ChatPromptTemplate.fromMessages([
          ["system", system],
          ["user", user.replace('{{text}}', '{content}')]
        ]);

        const input = await template.formatMessages({ content });
        const message = await model.call(input);
        // only accept text response for now
        const response = message.content.toString();

        switch (output) {
          case PromptOutputType.property: {
            let content = `${block?.content}${tag}\n`;

            if (!parser) {
              content += `${name.toLowerCase()}:: ${response}`;
            } else if (structured) {
              content += `${name.toLowerCase()}:: `;
              const record = await parser.parse(response);
              content += Object.entries(record)
                .map(([key, value]) => `${key}: ${value}`)
                .join(' ');
            } else if (listed) {
              content += `${name.toLowerCase()}:: `;
              const list = (await parser.parse(response)) as string[];
              content += list.join(', ');
            }

            await logseq.Editor.updateBlock(uuid, content);
            break;
          }
          case PromptOutputType.insert: {
            if (!parser) {
              await logseq.Editor.insertBlock(uuid, `${response}${tag}`);
            } else if (structured) {
              const record = await parser.parse(response);
              await logseq.Editor.updateBlock(
                uuid,
                `${block?.content}${tag}\n`,
              );
              for await (const [key, value] of Object.entries(record)) {
                await logseq.Editor.insertBlock(uuid, `${key}: ${value}`);
              }
            } else if (listed) {
              await logseq.Editor.updateBlock(
                uuid,
                `${block?.content}${tag}\n`,
              );
              const record = (await parser.parse(response)) as string[];
              for await (const item of record) {
                await logseq.Editor.insertBlock(uuid, item);
              }
            }
            break;
          }
          case PromptOutputType.replace:
            await logseq.Editor.updateBlock(uuid, `${response}${tag}`);
            break;
          case PromptOutputType.append:
            await logseq.Editor.updateBlock(uuid, `${block?.content} ${response}${tag}`);
            break;
        }
      },
    );
    logseq.onSettingsChanged(() => main());
  });
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error);
