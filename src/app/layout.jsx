import { Montserrat } from 'next/font/google';
import '@/styles/globals.scss';
import '@/styles/reset.scss';
import '@/styles/variables.scss';

import { Header } from '@/components/layouts/Header';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Kinopoisk NextJS',
  description: 'Kinopoisk Clone Using NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <div className='page-container'>
          <Header></Header>
          <main className='page'>{children}</main>
        </div>
      </body>
    </html>
  );
}
