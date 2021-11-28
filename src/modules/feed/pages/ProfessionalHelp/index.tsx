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
              name="Ariel Araujo"
              description="Neuropediatra formado na UFMG"
            />
            <ProfessionalCard
              name="Laura Costa"
              description="Pediatra formado na USP"
            />
            <ProfessionalCard
              name="Anderson Silva"
              description="Fonoaudiólogo formado na UFMG"
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

export const ProfessionalHelp = withAuth(ProfessionalHelpPage);
