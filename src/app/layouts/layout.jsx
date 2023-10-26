import { Header } from '../../components/business/Header';
import { CookieConsent } from '../../components/business/CookieConsent';

import '../globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body>
        <Header color={'header_gray'} />
        <main>{children}</main>
      </body>
      <CookieConsent />
    </html>
  );
}
