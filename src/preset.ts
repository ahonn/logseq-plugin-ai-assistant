import { PromptOutputType } from './settings';

export const ask = {
  name: 'Ask AI',
  prompt: `
    I have a question:
    """
    {{text}}
    """
    Please provide a helpful answer.
  `,
  output: PromptOutputType.insert,
};

export const summarize = {
  name: 'Summarize',
  prompt: `
    Please provide a concise summary of the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.property,
};

export const makeShorter = {
  name: 'Make Shorter',
  prompt: `
    Please shorten the following text while maintaining its key points:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
};

export const makeLonger = {
  name: 'Make Longer',
  prompt: `
    Please expand the following text, providing more details and depth:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
};

export const changeTone2Friendly = {
  name: 'Change Tone to Friendly',
  prompt: `
    Please rewrite the following text with a friendly tone:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
};

export const changeTone2Confident = {
  name: 'Change Tone to Confident',
  prompt: `
    Please rewrite the following text with a confident tone:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
};

export const changeTone2Casual = {
  name: 'Change Tone to Casual',
  prompt: `
    Please rewrite the following text with a casual tone:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
};

export const changeTone2Professional = {
  name: 'Change Tone to Professional',
  prompt: `
    Please rewrite the following text with a more professional tone:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
};

export const explainThis = {
  name: 'Explain This',
  prompt: `
    Please provide a clear explanation for the following text or code snippet:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.insert,
};

export const generateIdeas = {
  name: 'Generate Ideas',
  prompt: `
    Please creative ideas related to the following topic:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.insert,
};
