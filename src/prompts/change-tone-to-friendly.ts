import { IPrompt, PromptOutputType } from "./type";

export const ChangeToneToFriendly: IPrompt = {
  name: 'Change Tone to Friendly',
  system: 'You are an expert in warm and friendly communication.',
  user: `Please rewrite the following text with a friendly tone:
"""
{content}
"""`,
  output: PromptOutputType.replace,
};
