import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const isOpenAi = message.user.name === 'open-ai-chat';
  return (
    <div className={`py-5 text-white ${isOpenAi && 'bg-[#434654]'}`}>
      <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        <Image
          className='h-8 w-8'
          src={message.user.avatar}
          alt='user_avatar'
          width={32}
          height={32}
        />
        <p className='pt-1 text-sm'>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
