import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://grandavenue.ru/api/contacts', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Footer = async () => {
  const data = await getData();
  console.log(data);

  return (
    <footer className='footer'>
      <Link href={'tel:' + data.data.phone} className='footer__phone link'>
        {data.data.phone}
      </Link>
      <Link href={'mailto:' + data.data.email} className='footer__mail link'>
        {data.data.email}
      </Link>
      <div className='footer__row'>
        <div className='footer__office'>
          <span>Офис продаж:</span>
          <span>{data.data.address}</span>
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
