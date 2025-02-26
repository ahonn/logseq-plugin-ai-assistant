export interface IPrompt {
  name: string;
  prompt: string;
  output: PromptOutputType;
  format?: string | [] | { [key: string]: string };
  model?: string;
}

export enum PromptOutputType {
  property = 'property',
  replace = 'replace',
  insert = 'insert',
  append = 'append',
}
