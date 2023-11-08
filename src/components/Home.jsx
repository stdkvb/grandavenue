'use client';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { useTitle } from '@/src/hooks';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  useTitle('GrandAvenue | Главная');

  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/main',
    fetcher
  );

  return (
    <section className='page welcome'>
      <Image
        className='page__background'
        src={data && !isLoading && 'https://grandavenue.ru' + data.data.fileUrl}
        fill={true}
        alt='background photo'
      />
      <div className='container'>
        <h1>{data && !isLoading && data.data.title}</h1>
        <Link href={'/layouts'} className='button'>
          Выбрать квартиру
        </Link>
        <Link href={'/project'} className='welcome__next' title='scroll down'>
          <Image
            src='images/pagination-active.svg'
            width={32}
            height={73}
            alt='point'
          />
        </Link>
      </div>
    </section>
  );
};

export default Home;
