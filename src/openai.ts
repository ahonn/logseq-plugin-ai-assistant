import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default openai;
