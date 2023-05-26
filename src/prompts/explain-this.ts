import { IPrompt, PromptOutputType } from "./type";

export const ExplainThis: IPrompt = {
  name: 'Explain This',
  prompt: `
    Please provide a clear explanation for the following text or code snippet:
    """
    {content}
    """
  `,
  output: PromptOutputType.insert,
};
