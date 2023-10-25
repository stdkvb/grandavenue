import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'GrandAvenue | Расположение',
};

const Location = () => {
  return (
    <section className='page location'>
      <div className='location__map'>
        <div className='location__map-container'>
          <img
            className='location__background'
            src='https://s3-alpha-sig.figma.com/img/1647/064c/f73b83cfb5c03afe5d679b1b763c51c6?Expires=1699228800&Signature=quBTB3odIpaj4hDtUeCf05jD7uP0b8-kTSONYL2Mk2bbAmfMZeY7tXt62TRmBshn2H5XDmkRy9QgPnxrkjj1hwCsVHUOakpKzvFsPQmmC6qILk1dRMcgnOSO6TUayXfjfADqddhVgu~wHpVZo8KVcqBjpTOScINXEZ9RydzX7s53Sc1KyRjMy-0QHojAVr5xejslCMAxTqeYMyWVVCmM-CBdaGTZE-vleXmxP4~MrC-Ae6Dm0-21H71iJlOsApurOdjrRXYZXmbpf-JZat5fWOW-Xnyxao8xP3Xy9YzFm~IfH0jHvMHbBL~gh3sSrsN~bfYvYJbaDJKt3eqrPSzkGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            alt='map'
          />
          <Image
            className='location__base'
            width={54}
            height={72}
            src='/images/base.svg'
          />
          <Link href={'/location/1'} className='location__point' key={1}>
            <Image src={'/images/park.svg'} width={42} height={56} alt='park' />
          </Link>
        </div>
      </div>
      <h1>В центре города, в сердце событий</h1>
      <p>
        Выгодное расположение на стыке географического и исторического центров
        города
      </p>
    </section>
  );
};

export default Location;
