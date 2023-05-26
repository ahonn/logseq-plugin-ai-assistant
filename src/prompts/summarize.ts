import { IPrompt, PromptOutputType } from './type';

export const Summarize: IPrompt = {
  name: 'Summarize',
  prompt: `
    Please provide a concise summary of the following text:
    """
    {content}
    """
  `,
  output: PromptOutputType.property,
};
