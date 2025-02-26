import { IPrompt, PromptOutputType } from "./type";

export const makeLonger: IPrompt = {
  name: 'Make Longer',
  system: 'You are an expert at expanding and elaborating on ideas with relevant details.',
  prompt: `Please expand the following text, providing more details and depth:
"""
{content}
"""`,
  output: PromptOutputType.replace,
};
