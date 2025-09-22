import '../styles.css';
import "@fontsource-variable/nunito";
// @ts-ignore
import fontUrl from "@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2";

import type { ReactNode } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

// @ts-ignore
import favicon from '../favicon.png';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Nunito']">
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={favicon} />
      <link
        rel="preload"
        as="font"
        href={fontUrl}
        type="font/woff2"
        crossOrigin=""
      />
      <Header />
      <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
