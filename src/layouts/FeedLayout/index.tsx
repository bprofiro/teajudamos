import Head from 'next/head';
import { ReactNode } from 'react';

import { Container } from './styles';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const FeedLayout = ({ children, title }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title} | TEAjudamos</title>
      </Head>

      <main>{children}</main>
    </Container>
  );
};
