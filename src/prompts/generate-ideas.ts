import { IPrompt, PromptOutputType } from "./type";

export const GenerateIdeas: IPrompt = {
  name: 'Generate Ideas',
  system: 'You are a creative AI assistant that generates innovative and relevant ideas.',
  prompt: `Please generate creative ideas related to the following topic:
"""
{content}
"""`,
  output: PromptOutputType.insert,
  format: [],
};
