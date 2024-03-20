import {Montserrat, Wix_Madefor_Display} from 'next/font/google';
import '@/styles/globals.scss';
import '@/styles/reset.scss';
import '@/styles/variables.scss';

import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

const font = Wix_Madefor_Display({ subsets: ['latin'] });

export const metadata = {
  title: 'Kinopoisk NextJS',
  description: 'Kinopoisk Clone Using NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <div className='page-container'>
          <Header></Header>
          <main className='page'>{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
