import { GetServerSideProps } from 'next';
import { useRef } from 'react';

import { withAuth } from '~/hocs/withAuth';
import { FeedLayout } from '~/layouts/FeedLayout';

import { ProfessionalCard } from './components/ProfessionalCard';
import { Container, BannerContainer, DoctorsContainer } from './styles';

export const ProfessionalHelpPage = () => {
  return (
    <FeedLayout title="Ajuda Profissional">
      <Container>
        <DoctorsContainer>
          <p>
            Precisando de atendimento médico? Entre em contato com os
            profissionais cadastrados, eles estão aqui pra te ajudar! 😉
          </p>

          <div>
            <ProfessionalCard
              name="Brenda Profiro"
              description="Psicóloga formada na UFABC"
            />
            <ProfessionalCard
              name="Brenda Profiro"
              description="Psicóloga formada na UFABC"
            />
            <ProfessionalCard
              name="Brenda Profiro"
              description="Psicóloga formada na UFABC"
            />
          </div>
        </DoctorsContainer>

        <BannerContainer>
          <p>
            Precisa de um psicólogo para te auxiliar nessa jornada? Você pode
            encontrar profissionais especializados e marcar uma consulta!
          </p>

          <p>
            👉 Acesse:
            <a
              href="https://www.sbpsp.org.br/atendimento-a-comunidade/central-de-atendimento/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.sbpsp.org.br/atendimento-a-comunidade/central-de-atendimento/
            </a>
          </p>
        </BannerContainer>
      </Container>
    </FeedLayout>
  );
};

export const ProfessionalHelp = ProfessionalHelpPage;
