'use client';
import axios from 'axios';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = async () => {
  try {
    const response = await axios.get('/api/getEngines');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR('mdeols', fetchModels);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-300',
  });

  return (
    <div className='mt-2'>
      <Select
        className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        //classNames={{ control: (state) => 'bg-[#434654] border-[#434654]' }}
        placeholder={model}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
