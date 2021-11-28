import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '~/hooks/useAuth';

import { Container, CenteredNav, Logout, NavItem } from './styles';

export const Header = () => {
  const router = useRouter();

  const { signOut, isAuthLoading } = useAuth();

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

        <CenteredNav>
          <Link href="/feed" passHref>
            <NavItem isActive={router.pathname.endsWith('/feed')}>
              Comunidade
            </NavItem>
          </Link>

          <Link href="/feed/professional-help" passHref>
            <NavItem isActive={router.pathname.endsWith('/professional-help')}>
              Ajuda profissional
            </NavItem>
          </Link>
        </CenteredNav>

        <Logout>
          <button type="button" onClick={signOut}>
            {isAuthLoading ? 'Saindo...' : 'Sair'}
          </button>
        </Logout>
      </div>
    </Container>
  );
};
