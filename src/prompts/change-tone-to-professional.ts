import { IPrompt, PromptOutputType } from './type';

export const ChangeToneToProfessional: IPrompt = {
  name: 'Change Tone to Professional',
  system: 'You are an expert in professional business communication.',
  user: `Please rewrite the following text with a more professional tone:
"""
{content}
"""`,
  output: PromptOutputType.replace,
};
