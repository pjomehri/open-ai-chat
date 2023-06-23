import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3jlIF1ZcjurMW4TBRSVoix3uvzSl-KVQ',
  authDomain: 'open-ai-chat-927d4.firebaseapp.com',
  projectId: 'open-ai-chat-927d4',
  storageBucket: 'open-ai-chat-927d4.appspot.com',
  messagingSenderId: '455556220457',
  appId: '1:455556220457:web:1c4d30be93c7a468577e38',
};

// Initialize Firebase - ensure you only have a single instance
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
