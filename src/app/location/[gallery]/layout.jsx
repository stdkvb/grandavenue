import Link from 'next/link';
import { CookieConsent } from '../../../components/business/CookieConsent';

import '../../globals.scss';

export const metadata = {
  title: 'GrandAvenue',
  description: 'Жилой комплекс бизнес-класса от ГК «Первый Трест»',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className='bg-gray'>
        <main>
          <Link href={'/location'} className='gallery__close'></Link>
          {children}
        </main>
      </body>
      <CookieConsent />
    </html>
  );
}
