import { NextApiRequest, NextApiResponse } from 'next';
import openai from '@utils/open-ai-chat';

type Option = {
  value: String;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export const GET = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  return new Response(JSON.stringify({ modelOptions }), {
    status: 200,
  });
};
