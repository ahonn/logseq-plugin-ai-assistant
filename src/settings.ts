import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';

export enum PromptOutputType {
  property = 'property',
  replace = 'replace',
}

export interface IPromptOptions {
  name: string;
  prompt: string;
  output: PromptOutputType;
}

export interface ISettings {
  customPrompts: {
    enable: boolean;
    prompts: IPromptOptions[];
  };
}

const settings: SettingSchemaDesc[] = [
  {
    key: 'customPrompts',
    type: 'object',
    title: 'Custom Prompts',
    description: 'Custom Prompts',
    default: {
      enable: false,
      prompts: [],
    },
  },
];

export default settings;
