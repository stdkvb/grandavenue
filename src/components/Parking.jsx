import Link from 'next/link';
import Image from 'next/image';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Parking = () => {
  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/parking',
    fetcher
  );

  return (
    <>
      {data &&
        !isLoading &&
        data.data.map((item) => (
          <section className='page welcome' key={item.id}>
            <Image
              fill={true}
              className='page__background'
              src={'https://grandavenue.ru' + item.fileUrl}
              alt='photo'
            />
            <div className='container'>
              <h1>{item.title}</h1>
              {item.btnLink && (
                <Link
                  href={`${item.btnLink}`}
                  target='_blank'
                  className='button button_secondary'
                >
                  Выбрать место
                </Link>
              )}
            </div>
          </section>
        ))}
    </>
  );
};

export default Parking;
