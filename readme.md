# Logseq AI Assistant

A powerful tool that enhances your Logseq experience by allowing you to interact with AI models like OpenAI's `gpt-3.5-turbo`.

With this plugin, you can effortlessly generate or transform text using custom prompts,
enabling you to achieve more efficient and creative workflows within Logseq.

![](https://user-images.githubusercontent.com/9718515/226260897-d5e39c09-4714-4d23-b004-28a2391512c4.gif)

> Inspired by [Notion AI](https://www.notion.so/product/ai) and [Raycast AI](https://www.raycast.com/ai)

## Features
- Seamless integration with Logseq
- Customizable prompt support
- Easy-to-use built-in prompts 
- Using a custom Open AI basePath

## Install

### Option 1: directly install via Marketplace

### Option 2: manually load

- turn on Logseq developer mode
- [download the prebuilt package here](https://github.com/ahonn/logseq-plugin-ai-assistant/releases)
- unzip the zip file and load from Logseq plugins page

## Configuration
Before using the plugin, you need to configure it according to your preferences.

- **API Key**: Enter your OpenAI API key in this field. If you don't have an API key yet, visit the [OpenAI](https://platform.openai.com/account/api-keys) to obtain one.
- **Model**: Choose the OpenAI model you want to use, such as "gpt-3.5-turbo". Different models may offer varying levels of performance and text generation capabilities.
- **Custom Prompts**: Enable this option if you want to use custom prompts for generating or transforming text. You can add, edit, or remove prompts in the prompts array.

## Built-in Prompts

The plugin comes with several built-in prompts to enhance your text editing experience

- **Ask AI**: Ask a question, and the AI will provide a helpful answer.
- **Summarize**: Provide a concise summary of the text.
- **Make Shorter**: Shorten the text while maintaining its key points.
- **Make Longer**: Expand the text, providing more details and depth.
- **Change Tone to Friendly**: Rewrite the text with a friendly tone.
- **Change Tone to Confident**: Rewrite the text with a confident tone.
- **Change Tone to Casual**: Rewrite the text with a casual tone.
- **Change Tone to Professional**: Rewrite the text with a more professional tone.
- **Explain This**: Provide a clear explanation for the text or code snippet.
- **Generate Ideas**: Generate creative ideas related to the selected topic.

See all built-in prompts [here](https://github.com/ahonn/logseq-plugin-ai-assistant/blob/master/src/preset.ts)

## How to Use a Custom Prompt

- Open the plugin settings and locate "customPrompts" field.

- Add the following JSON object to the "prompts" array:

```json
{
  "apiKey": "<your-api-key>",
  "model": "gpt-3.5-turbo",
  "customPrompts": {
    "enable": true, // <- Make sure to enable this.
    "prompts": [
      {
        "name": "Markdown Table",
        "prompt": "Please generate a {{text}} Markdown table",
        "output": "replace" // "property", "replace" or "insert"
      }
    ]
  },
  "disabled": false
}
```

- In the Logseq editor, focus the cursor on the place where you want to generate the table and do the following.
![](https://user-images.githubusercontent.com/9718515/226259576-a1193b51-8a57-4cad-9270-f5bc30a5ba29.gif)

## Contribution
Issues and PRs are welcome!

## Buy me a coffee

If my plugin solve your situation and you will, you can choose to [buy me a coffee](https://www.buymeacoffee.com/yuexunjiang).

## Licence
MIT
