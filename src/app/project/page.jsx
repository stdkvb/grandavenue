import Image from 'next/image';

// export const metadata = {
//   title: 'GrandAvenue | О проекте',
// };

async function getData() {
  const res = await fetch('https://grandavenue.ru/api/project', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Project = async () => {
  const data = await getData();
  // console.log(data);

  return (
    <section className='page project'>
      <Image
        fill={true}
        className='page__background'
        src={'https://grandavenue.ru' + data.data.fileUrl}
      />
      <div className='container'>
        <h1>{data.data.content}</h1>
      </div>
    </section>
  );
};

export default Project;
