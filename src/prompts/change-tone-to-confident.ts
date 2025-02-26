import { IPrompt, PromptOutputType } from "./type";

export const ChangeToneToConfident: IPrompt = {
  name: 'Change Tone to Confident',
  system: 'You are an expert in confident and assertive communication.',
  prompt: `Please rewrite the following text with a confident tone:
"""
{content}
"""`,
  output: PromptOutputType.replace,
};
