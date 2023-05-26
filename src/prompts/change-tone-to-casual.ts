import { IPrompt, PromptOutputType } from "./type";

export const ChangeToneToCasual: IPrompt = {
  name: 'Change Tone to Casual',
  prompt: `
    Please rewrite the following text with a casual tone:
    """
    {content}
    """
  `,
  output: PromptOutputType.replace,
};
