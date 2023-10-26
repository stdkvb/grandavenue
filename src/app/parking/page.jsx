import Link from 'next/link';
import Image from 'next/image';

// export const metadata = {
//   title: 'GrandAvenue | Паркинг',
// };

async function getData() {
  const res = await fetch('https://grandavenue.ru/api/parking', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Parking = async () => {
  const data = await getData();
  console.log(data);

  return (
    <>
      {data.data.map((item) => (
        <section className='page welcome'>
          <Image
            fill={true}
            className='page__background'
            src={'https://grandavenue.ru' + item.fileUrl}
            alt='photo'
          />
          <div className='container'>
            <h1>{item.title}</h1>
            <Link href={'' && item.btnLink} className='button'>
              Выбрать место
            </Link>
          </div>
        </section>
      ))}
    </>
  );
};

export default Parking;
