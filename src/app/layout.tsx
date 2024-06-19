import '@/styles/globals.scss';
import '@/styles/reset.scss';
import '@/styles/variables.scss';

import { Wix_Madefor_Display } from 'next/font/google';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Nav from '@/components/layouts/Nav';
import QueryProvider from '@/components/providers/QueryProvider';

const font = Wix_Madefor_Display({ subsets: ['latin'] });

export const metadata = {
  title: 'Kinopoisk NextJS',
  description: 'Kinopoisk Clone Using NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <div className="page-container">
          <Header />
          <main className="page container">
            <Nav />
            <QueryProvider>
              <div className="page-content">{children}</div>
            </QueryProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
