import '@logseq/libs';
import openai from './openai';
import { makeLonger, makeShorter, summarize } from './preset';
import settings, {
  IPromptOptions,
  ISettings,
  PromptOutputType,
} from './settings';
import { getBlockContent } from './utils';

function main() {
  const { customPrompts } = logseq.settings as unknown as ISettings;
  const prompts = [summarize, makeShorter, makeLonger];

  if (customPrompts.enable) {
    prompts.push(...customPrompts.prompts);
  }

  prompts.map(({ name, prompt, output }: IPromptOptions) => {
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
        const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt.replace('{{text}}', content),
            },
          ],
        });
        const { data } = completion;
        if (data.choices && data.choices.length) {
          const [{ message }] = data.choices;
          if (!message) {
            return;
          }

          switch (output) {
            case PromptOutputType.property:
              logseq.Editor.updateBlock(
                uuid,
                block?.content +
                  `\n ${name.toLowerCase()}:: ${message.content}`,
              );
              break;
            case PromptOutputType.replace:
              logseq.Editor.updateBlock(uuid, message.content);
              break;
          }
        }
      },
    );
  });
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error);
