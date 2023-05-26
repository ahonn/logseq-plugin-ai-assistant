import { IPrompt, PromptOutputType } from "./type";

export const ChangeToneToFriendly: IPrompt = {
  name: 'Change Tone to Friendly',
  prompt: `
    Please rewrite the following text with a friendly tone:
    """
    {content}
    """
  `,
  output: PromptOutputType.replace,
};
