import Image from 'next/image';
import Link from 'next/link';

import { Container, LinkContainer } from './styles';

export const Header = () => {
  return (
    <Container>
      <div>
        <section>
          <Image
            src={`/assets/images/logo/logo.svg`}
            alt="Circulo com quatro peças de qubra cabeça dentro e ao seu lado a palavra Te ajudamos"
            height={90}
            width={200}
          />
        </section>

        <nav>
          <Link href="/auth/sign-in" passHref>
            <LinkContainer color="#00182C" variant="soft">
              Fazer login
            </LinkContainer>
          </Link>

          <Link href="/auth/sign-up" passHref>
            <LinkContainer
              color="#00182C"
              variant="solid"
              backgroundColor="#fff"
            >
              Cadastre-se
            </LinkContainer>
          </Link>
        </nav>
      </div>
    </Container>
  );
};
