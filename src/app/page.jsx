'use client';
import Link from 'next/link';
import Image from 'next/image';
import Project from './project/page';
import Architecture from './architecture/page';
import Infrastructure from './infrastructure/page';
import Layouts from './layouts/page';
import Location from './location/page';
import Parking from './parking/page';
import Contacts from './contacts/page';

import {
  Fullpage,
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from '@ap.cx/react-fullpage';

// export const metadata = {
//   title: 'GrandAvenue | Главная',
// };

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
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <section className='page welcome'>
            <Image
              className='page__background'
              src={'https://grandavenue.ru' + data.data.fileUrl}
              fill={true}
              alt='photo'
            />
            <div className='container'>
              <h1>{data.data.title}</h1>
              <Link href={'/layouts'} className='button'>
                Выбрать квартиру
              </Link>
            </div>
          </section>
        </FullpageSection>
        <FullpageSection>
          <Project />
        </FullpageSection>
        <FullpageSection>
          <Location />
        </FullpageSection>
        <FullpageSection>
          <Architecture />
        </FullpageSection>
        <FullpageSection>
          <Infrastructure />
        </FullpageSection>
        <Layouts />
        <FullpageSection>
          <Parking />
        </FullpageSection>
        <Contacts />
      </FullPageSections>
    </Fullpage>
  );
};

export default Home;
