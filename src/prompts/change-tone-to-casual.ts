import { IPrompt, PromptOutputType } from "./type";

export const ChangeToneToCasual: IPrompt = {
  name: 'Change Tone to Casual',
  system: 'You are an expert in casual and conversational communication.',
  user: `Please rewrite the following text with a casual tone:
"""
{content}
"""`,
  output: PromptOutputType.replace,
};
