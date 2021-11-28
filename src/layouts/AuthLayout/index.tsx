import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FiChevronUp } from 'react-icons/fi';

import { Container, Left, Right } from './styles';

type LayoutProps = {
  children: ReactNode;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
};

export const AuthLayout = ({
  children,
  title,
  image,
  imageAlt,
  imagePosition,
}: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title} | TEAjudamos</title>
      </Head>

      <main>
        {imagePosition === 'left' ? (
          <>
            <Left>
              <Link href="/" passHref>
                <a>
                  <FiChevronUp size={24} color="#fff" />
                </a>
              </Link>

              <Image
                src={`/assets/images/landingPage/${image}.svg`}
                alt={imageAlt}
                height={520}
                width={520}
              />
            </Left>

            <Right>{children}</Right>
          </>
        ) : (
          <>
            <Left>
              <Link href="/" passHref>
                <a>
                  <FiChevronUp size={24} color="#fff" />
                </a>
              </Link>

              {children}
            </Left>

            <Right>
              <Image
                src={`/assets/images/landingPage/${image}.svg`}
                alt={imageAlt}
                height={520}
                width={520}
              />
            </Right>
          </>
        )}
      </main>
    </Container>
  );
};
