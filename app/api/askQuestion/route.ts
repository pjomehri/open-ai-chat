import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

import { adminDb } from '@utils/firebaseAdmin';
import query from '@utils/queryApi';

type Data = {
  answer: String;
};

export const POST = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const body = [];

  for await (const chunk of req.body) {
    body.push(chunk);
  }

  const data = JSON.parse(Buffer.concat(body).toString());

  const { prompt, chatId, model, session } = data;

  if (!prompt) {
    return new Response(JSON.stringify({ answer: 'Please provide prompt! ' }), {
      status: 400,
    });
  }

  if (!chatId) {
    return new Response(
      JSON.stringify({ answer: 'Please provide a valid chat ID' }),
      {
        status: 400,
      }
    );
  }

  const response = await query(prompt, model);

  const message: Message = {
    text: response || 'open-ai-chat could not find an answer for that',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'open-ai-chat',
      name: 'open-ai-chat',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  return new Response(JSON.stringify({ answer: message.text }), {
    status: 200,
  });
};
