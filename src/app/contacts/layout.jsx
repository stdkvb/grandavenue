import { Header } from '../../components/business/Header';
import { CookieConsent } from '../../components/business/CookieConsent';

import '../globals.scss';

export const metadata = {
  title: 'GrandAvenue | Контакты',
  description: 'Жилой комплекс бизнес-класса от ГК «Первый Трест»',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className='bg-gray'>
        <Header color={'header_gray'} />
        <main>{children}</main>
      </body>
      <CookieConsent />
    </html>
  );
}
