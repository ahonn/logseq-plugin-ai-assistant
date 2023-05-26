import { IPrompt, PromptOutputType } from "./type";

export const makeLonger: IPrompt = {
  name: 'Make Longer',
  prompt: `
    Please expand the following text, providing more details and depth:
    """
    {content}
    """
  `,
  output: PromptOutputType.replace,
};
