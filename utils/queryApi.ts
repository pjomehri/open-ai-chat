import openai from './open-ai-chat';

const query = async (prompt: string, model: string) => {
  try {
    const response = await openai.createCompletion({
      model,
      prompt,
      temperature: 0,
      top_p: 1.0,
      max_tokens: 1000,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    return response.data.choices[0].text;
  } catch (err: any) {
    return `open-ai-chat was unable to find an answer for that! (Error: ${err.message})`;
  }
};

export default query;
