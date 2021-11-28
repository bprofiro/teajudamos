import Image from 'next/image';
import Link from 'next/link';
import { FiChevronUp } from 'react-icons/fi';

import { Container, LinksSection, Logo, ActionSection } from './styles';

export const Footer = () => {
  return (
    <Container>
      <div>
        <Logo>
          <Image
            src={`/assets/images/logo/logo.svg`}
            alt="Circulo com quatro peças de qubra cabeça dentro e ao seu lado a palavra Te ajudamos"
            height={90}
            width={200}
          />
        </Logo>

        <LinksSection>
          <ul>
            <li>
              <strong>Sobre</strong>
            </li>
            <li>Sobre nós</li>
            <li>Nossas redes sociais</li>
          </ul>

          <ul>
            <li>
              <strong>Dúvidas</strong>
            </li>
            <li>Fale conosco</li>
            <li>Ajuda</li>
            <li>
              <a>Minha conta</a>
            </li>
          </ul>
        </LinksSection>

        <ActionSection>
          <button>
            <FiChevronUp size={24} />
          </button>
        </ActionSection>
      </div>
    </Container>
  );
};
