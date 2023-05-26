import { IPrompt, PromptOutputType } from "./type";

export const makeShorter: IPrompt = {
  name: 'Make Shorter',
  prompt: `
    Please shorten the following text while maintaining its key points:
    """
    {content}
    """
  `,
  output: PromptOutputType.replace,
};
