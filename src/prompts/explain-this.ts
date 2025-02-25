import { IPrompt, PromptOutputType } from "./type";

export const ExplainThis: IPrompt = {
  name: 'Explain This',
  system: 'You are an expert teacher who explains complex topics in clear, understandable terms.',
  user: `Please provide a clear explanation for the following text or code snippet:
"""
{content}
"""`,
  output: PromptOutputType.insert,
};
