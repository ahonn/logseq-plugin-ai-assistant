import { IPrompt, PromptOutputType } from "./type";

export const makeShorter: IPrompt = {
  name: 'Make Shorter',
  system: 'You are an expert at concise writing and summarization.',
  user: `Please shorten the following text while maintaining its key points:
"""
{content}
"""`,
  output: PromptOutputType.replace,
};
