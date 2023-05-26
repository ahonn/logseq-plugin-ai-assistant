import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';
import { IPrompt } from './prompts/type';

export interface ISettings {
  apiKey: string;
  basePath: string;
  model: string;
  tag: string;
  customPrompts: {
    enable: boolean;
    prompts: IPrompt[];
  };
}

const settings: SettingSchemaDesc[] = [
  {
    key: 'apiKey',
    type: 'string',
    title: 'API Key',
    description: 'Enter your OpenAI API key.',
    default: '',
  },
  {
    key: 'basePath',
    type: 'string',
    title: 'openApi basePath',
    description: 'Enter your openApi proxy basePath',
    default: 'https://api.openai.com/v1',
  },
  {
    key: 'model',
    type: 'string',
    title: 'Model',
    description: 'Choose the OpenAI model (e.g., "gpt-3.5-turbo").',
    default: 'gpt-3.5-turbo',
  },
  {
    key: 'tag',
    type: 'string',
    title: 'Tag',
    description: 'Add specific tags to AI-generated content',
    default: '[[🤖]]'
  },
  {
    key: 'customPrompts',
    type: 'object',
    title: 'Custom Prompts',
    description: 'Enable and manage custom prompts.',
    default: {
      enable: false,
      prompts: [],
    },
  },
];

export default settings;
