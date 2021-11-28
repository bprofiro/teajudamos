import Head from 'next/head';
import { ReactNode } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Container } from './styles';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const DefaultLayout = ({ children, title }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title} | TEAjudamos</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </Container>
  );
};
