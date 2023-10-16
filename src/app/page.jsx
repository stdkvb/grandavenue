import Link from 'next/link';

export const metadata = {
  title: 'GrandAvenue | Главная',
};

export default function Home() {
  return (
    <section className='page welcome'>
      <img
        className='page__background'
        src='https://s3-alpha-sig.figma.com/img/52d4/ecf4/e70ba3fdedfc3f160200a271b14d4a2c?Expires=1698624000&Signature=cxypoAcHLKL2EQJxpKg4TwxqGC7zSgqUyMdc7cFVQ4geVRVtyQo2EZfHhvQf9~3wUZL-KjTokpc4-4djSh78xsvLfc1Uqz1jtc56RdbdTQ3ED-guVoSjKuGNFuRavBAukZINLDkjDGjiwkJh1Gm3e7gdqd~IXGx-PphcrA5S06yJPzwsl8L01auE~yBrpP0ogbtEteEBZHsyM-IWpVRAdfnC3hEg2y14Z6ZNGi~MJQXGetclVRQXRzwioHwKKELydsmVmF7P5tthOhx1j9MV~IX42mAztWwWOiW-xe-eVn1cmx8EwRA8MZLvs05OGzOPBLBNQn~t-ei9ZwVB-cEFtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      />
      <div className='container'>
        <h1>Жилой комплекс бизнес-класса от ГК «Первый Трест»</h1>
        <Link href={'/layouts'} className='button-link'>
          Выбрать квартиру
        </Link>
      </div>
    </section>
  );
}
