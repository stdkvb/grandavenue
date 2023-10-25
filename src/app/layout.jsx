import { Header } from '../components/business/Header';
import { CookieConsent } from '../components/business/CookieConsent';

import './globals.scss';

export const metadata = {
  title: 'GrandAvenue',
  description: 'Жилой комплекс бизнес-класса от ГК «Первый Трест»',
};

// const BASE_URL = process.env.NODE_ENV === 'development' ? 'https://' : '';

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
      <CookieConsent />
    </html>
  );
}
