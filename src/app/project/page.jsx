import Image from 'next/image';
import PageWrapper from '@/src/components/PageWrapper';

export const metadata = {
  title: 'GrandAvenue | О проекте',
};

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
    <PageWrapper>
      <section className='page project'>
        <Image
          fill={true}
          className='page__background'
          src={'https://grandavenue.ru' + data.data.fileUrl}
          alt='photo'
        />
        <div className='container'>
          <h1>{data.data.content}</h1>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Project;
