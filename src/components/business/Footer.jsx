import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link href={'tel:+73472017063'} className='footer__phone link'>
        +7 (347) 201-70-63
      </Link>
      <Link href={'mailto:sale@1trest.city'} className='footer__mail link'>
        sale@1trest.city
      </Link>
      <div className='footer__row'>
        <div className='footer__office'>
          <span>Офис продаж:</span>
          <span>Группа компаний «Первый Трест» г. Уфа, ул. Цюрупы, 30</span>
          <span>ПН-ПТ: 9:00 — 20:00, СБ: 10:00 — 18:00, ВС: выходной</span>
        </div>
        <Link href={''} className='link'>
          <Image src='images/document.svg' width={50} height={50} alt='viber' />
          Список разрешительной документации — ДОМ.РФ
        </Link>
      </div>
      <div className='footer__socials'>
        <Link href={'#viber'}>
          <Image src='images/viber.svg' width={40} height={40} alt='viber' />
        </Link>
        <Link href={'#vk'}>
          <Image src='images/vk.svg' width={40} height={40} alt='vk' />
        </Link>
        <Link href={'#telegram'}>
          <Image
            src='images/telegram.svg'
            width={40}
            height={40}
            alt='telegram'
          />
        </Link>
        <Link href={'#whatsapp'}>
          <Image
            src='images/whatsapp.svg'
            width={40}
            height={40}
            alt='whatsapp'
          />
        </Link>
      </div>
      <div className='footer__bottom'>
        <span>© 2023. Все права защищены.</span>
        <Link href={'https://wptt.ru'} className='link'>
          Разработка — вебпространство
        </Link>
        <Link href={'/privacy'} className='link'>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
