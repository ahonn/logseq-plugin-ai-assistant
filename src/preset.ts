import { PromptOutputType } from "./settings";

export const summarize = {
  name: 'Summarize',
  prompt: `
    Summarize the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.property,
};

export const makeShorter = {
  name: 'Make Shorter',
  prompt: `
    Shorten the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
}

export const makeLonger = {
  name: 'Make Longer',
  prompt: `
    Expand the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
}
