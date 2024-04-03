import { Wix_Madefor_Display } from 'next/font/google';
import '@/styles/globals.scss';
import '@/styles/reset.scss';
import '@/styles/variables.scss';

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Nav from '@/components/layouts/Nav';

const font = Wix_Madefor_Display({ subsets: ['latin'] });

export const metadata = {
  title: 'Kinopoisk NextJS',
  description: 'Kinopoisk Clone Using NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <div className="page-container">
          <Header />
          <main className="page container">
            <Nav />
            <div className="page-content">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
