'use client';
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Project = () => {
  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/project',
    fetcher
  );

  return (
    <section className='page project'>
      {/* <Image
        fill={true}
        className='page__background page__background_zoom'
        src={data && !isLoading && 'https://grandavenue.ru' + data.data.fileUrl}
        alt='photo'
      /> */}
      <video
        autoPlay
        muted
        loop
        className='page__background'
        // src={data && !isLoading && 'https://grandavenue.ru' + data.data.fileUrl}
        src='videos/sample-5s.mp4'
        fill={true}
        alt='background video'
      ></video>
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
