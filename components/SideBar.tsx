'use client';

import { signOut, useSession } from 'next-auth/react';
import { query, collection, orderBy } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Image from 'next/image';

import { db } from '@utils/firebase';
import NewChat from './NewChat';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email || '', 'chats'),
        orderBy('createdAt', 'desc')
      )
  );

  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>
          {/* New chat */}
          <NewChat />
          <div className='hidden md:inline'>
            <ModelSelection />
          </div>
          <div className='flex flex-col space-y-2 my-2'>
            {loading && (
              <div className='animate-pulse text-center text-white'>
                <p>Loading Chat...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <Image
          onClick={() => signOut()}
          className='rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition'
          src={session.user?.image || ''}
          alt='user_profile'
          width={48}
          height={48}
        />
      )}
    </div>
  );
};

export default SideBar;
