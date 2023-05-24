import '@logseq/libs';
import { Configuration, OpenAIApi } from 'openai';
import * as presetPrompts from './preset';
import settings, {
  IPromptOptions,
  ISettings,
  PromptOutputType,
} from './settings';
import { getBlockContent } from './utils';

function main() {
  const { apiKey, basePath, model, customPrompts, tag } =
    logseq.settings as unknown as ISettings;
  const prompts = [...Object.values(presetPrompts)];

  if (customPrompts.enable) {
    prompts.push(...customPrompts.prompts);
  }

  prompts.map(({ name, prompt, output }: IPromptOptions) => {
    const configuration = new Configuration({
      apiKey,
      basePath
    });

    const openai = new OpenAIApi(configuration);

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
          model,
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
          const content = message.content.trim();

          switch (output) {
            case PromptOutputType.property:
              await logseq.Editor.updateBlock(
                uuid,
                block?.content +
                  ` #${tag}\n ${name.toLowerCase()}:: ${content}`,
              );
              break;
            case PromptOutputType.insert:
              await logseq.Editor.updateBlock(
                uuid,
                block?.content + ` #${tag}`,
              );
              await logseq.Editor.insertBlock(uuid, content);
              break;
            case PromptOutputType.replace:
              await logseq.Editor.updateBlock(uuid, `${content} #${tag}`);
              break;
          }
        }
      },
    );
    logseq.onSettingsChanged(() => main())
  });
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error);
