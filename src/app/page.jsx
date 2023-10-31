import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '../components/PageWrapper';

export const metadata = {
  title: 'GrandAvenue | Главная',
};

async function getData() {
  const res = await fetch('https://grandavenue.ru/api/main', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();
  // console.log(data);

  return (
    <PageWrapper>
      <section className='page welcome'>
        <Image
          className='page__background'
          src={'https://grandavenue.ru' + data.data.fileUrl}
          fill={true}
          alt='background photo'
        />
        <div className='container'>
          <h1>{data.data.title}</h1>
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
    </PageWrapper>
  );
};

export default Home;
