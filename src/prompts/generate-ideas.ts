import { IPrompt, PromptOutputType } from "./type";

export const GenerateIdeas: IPrompt = {
  name: 'Generate Ideas',
  prompt: `
    Please creative ideas related to the following topic:
    """
    {content}
    """
  `,
  output: PromptOutputType.insert,
  format: [],
};
