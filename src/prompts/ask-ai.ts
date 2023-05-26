import { IPrompt, PromptOutputType } from './type';

export const AskAI: IPrompt = {
  name: 'Ask AI',
  prompt: `
    I have a question:
    """
    {content}
    """
    Please provide a helpful answer.
  `,
  output: PromptOutputType.insert,
};
