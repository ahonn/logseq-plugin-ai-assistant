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

export const changeTone2Friendly = {
  name: 'Change Tone to Friendly',
  prompt: `
    Change tone to friendly of the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
}

export const changeTone2Confident = {
  name: 'Change Tone to Confident',
  prompt: `
    Change tone to confident of the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
}

export const changeTone2Casual = {
  name: 'Change Tone to Casual',
  prompt: `
    Change tone to casual of the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
}

export const changeTone2Professional = {
  name: 'Change Tone to Professional',
  prompt: `
    Change tone to Professional of the following text:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.replace,
}

export const explainThis = {
  name: 'Explain This',
  prompt: `
    Explain This following text or code:
    """
    {{text}}
    """
  `,
  output: PromptOutputType.appendChild,
}

export const ask = {
  name: 'Ask',
  prompt: `{{text}}`,
  output: PromptOutputType.appendChild,
}
