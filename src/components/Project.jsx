'use client';
import Image from 'next/image';
import useSWR from 'swr';
import { useTitle } from '@/src/hooks';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Project = () => {
  useTitle('GrandAvenue | О проекте');

  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/project',
    fetcher
  );

  return (
    <section className='page project'>
      <Image
        fill={true}
        className='page__background'
        src={data && !isLoading && 'https://grandavenue.ru' + data.data.fileUrl}
        alt='photo'
      />
      <div className='container'>
        <h1
          dangerouslySetInnerHTML={{
            __html: data && !isLoading && data.data.content,
          }}
        ></h1>
      </div>
    </section>
  );
};

export default Project;
