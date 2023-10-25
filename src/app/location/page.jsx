import Link from 'next/link';

export const metadata = {
  title: 'GrandAvenue | Расположение',
};

async function getData() {
  const res = await fetch('https://grandavenue.ru/api/location', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Location = async () => {
  const data = await getData();
  console.log(data);

  return (
    <section className='page location'>
      <div className='location__wrapper'>
        <div className='location__map'>
          <div
            className='location__background'
            style={{
              backgroundImage: `url(/images/map-desktop.png)`,
            }}
          ></div>
          <img
            className='location__background-mobile'
            src='images/map-mobile.png'
          />
          <div
            className='location__base'
            style={{
              backgroundImage: `url("/images/base.svg")`,
            }}
          ></div>
          <Link
            href={'/location/1'}
            className='location__point'
            style={{
              backgroundImage: `url("/images/park.svg")`,
              left: `51%`,
              top: `31%`,
            }}
          ></Link>
          <Link
            href={'/location/2'}
            className='location__point'
            style={{
              backgroundImage: `url("/images/playground.svg")`,
              left: `25%`,
              top: `63%`,
            }}
          ></Link>
        </div>
      </div>

      <h1>{data.data.title}</h1>
      <p>{data.data.additionalText}</p>
    </section>
  );
};

export default Location;
