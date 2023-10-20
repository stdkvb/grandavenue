import Link from 'next/link';

export const metadata = {
  title: 'GrandAvenue | Паркинг',
};

const Parking = () => {
  return (
    <section className='page welcome'>
      <img
        className='page__background'
        src='https://s3-alpha-sig.figma.com/img/a8e5/3c20/326920dab161ab8d3dea1d12009e9571?Expires=1698624000&Signature=Tb-mhDWu1KbzQ2L4Yo26gasHurYHOGsC8RsSG8Is3nw3PQJYku-xJpnTr-Jz49dR9HUIPp~zfe01fcsgd~dpV94ySzSII--S6im4vpaH5E~q6gURNnQdaQD7nholJDtCo~BXrJXfZKNva6vKXwMgnlOkQBbO5R21fArweSFEdWc8riqofnwalYJkr1fnP-KHmhtgurEzcsj--HIzgSnh1IJNcYzqeLHGPv6n35OqGlZVveLH8hE0j8nm1Q5JhAeEw2EI~LtjLumHe67RIAO04eu7T~uWhc0BIKxRIBnePqqMK8Ao9uJMxNYD6VCfchjuVYbop1byPfvvahPfpf388g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      />
      <div className='container'>
        <h1>
          Просторный подземный паркинг с прямым доступом на лифте с любого этажа
        </h1>
        <Link href={'/'} className='button'>
          Выбрать место
        </Link>
      </div>
    </section>
  );
};

export default Parking;
