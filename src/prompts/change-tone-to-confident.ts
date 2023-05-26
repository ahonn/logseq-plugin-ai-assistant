import { IPrompt, PromptOutputType } from "./type";

export const ChangeToneToConfident: IPrompt = {
  name: 'Change Tone to Confident',
  prompt: `
    Please rewrite the following text with a confident tone:
    """
    {content}
    """
  `,
  output: PromptOutputType.replace,
};
