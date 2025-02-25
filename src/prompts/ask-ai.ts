import { IPrompt, PromptOutputType } from './type';

export const AskAI: IPrompt = {
  name: 'Ask AI',
  system: 'You are a helpful AI assistant that provides clear and concise answers.',
  user: `I have a question:
"""
{content}
"""
Please provide a helpful answer.`,
  output: PromptOutputType.insert,
};
