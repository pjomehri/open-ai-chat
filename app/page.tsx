import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className='text-white flex flex-col items-center h-screen justify-center px-2 '>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* Sun Icon */}
            <SunIcon className='h-8 w-8' />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='info_text'>{'"Explain Something to me "'}</p>
            <p className='info_text'>
              {'"What is the difference between a dog and a cat?"'}
            </p>
            <p className='info_text'>{'"What is the color of the sun?"'}</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8' />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='info_text'>{'"Change the chatGPT model to use"'}</p>
            <p className='info_text'>
              {'"Messages are stored in Firebase\'s firestore"'}
            </p>
            <p className='info_text'>
              {'"Hot Toast notifications when chatGPT is thinking!?"'}
            </p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='info_text'>{'"Sometimes gets things wrong"'}</p>
            <p className='info_text'>
              {'"Maybe a bit biased or factually incorrect"'}
            </p>
            <p className='info_text'>{'"Has no knowledge passed 2021"'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
