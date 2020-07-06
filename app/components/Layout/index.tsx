import * as React from 'react';
import Head from 'next/head';

import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Komek 2020</title>
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export { Layout };
