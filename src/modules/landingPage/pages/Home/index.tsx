import { DefaultLayout } from '~/layouts/DefaultLayout';

import { Section } from './components/Section';
import { Container } from './styles';

export const HomePage = () => {
  return (
    <DefaultLayout title="Home">
      <Container>
        <Section
          title="Bem-vindo ao TEAjudamos!"
          description="Aqui você pode se conectar com pais e familiares de crianças no
          espectro e compartilhar experiências! Cadastre-se e faça parte
          dessa comunidade &#128516;"
          image="welcome"
          imageAlt="Três pessoas montando um quebra cabeças de uma lâmpada"
          imagePosition="right"
        />

        <hr />

        <Section
          title="Encontre informações que possam TEAjudar!"
          description="Reunimos em um só lugar todos os artigos e sites importantes que
          podem te ajudar nessa jornada!"
          image="find-infos"
          imageAlt="Pessoa de cabelo curto e roupas azuis falando em um megafone"
          imagePosition="left"
          link="/useful-links"
          linkText="Acessar links úteis"
        />

        <hr />

        <Section
          title="Entenda nossa Comunidade"
          description="Conectamos você com outros pais de crianças dentro do espectro
          para compartilhar sua experiência e melhorar a infância do seu
          pequeno!"
          image="understand-community"
          imageAlt="Quatro pessoas em cima de um celular azul trocando mensagens"
          imagePosition="right"
        />

        <hr />

        <Section
          title="Tenha uma Rede de profissionais para TEAuxiliar"
          description="Disponibilizamos uma rede de atendimento com profissionais da
          saúde especializados para auxiliar você."
          image="networking"
          imageAlt="Duas mulheres conversando remotamente utilizando seus notebooks"
          imagePosition="left"
          link="/auth/sign-in"
          linkText="Cadastre-se"
        />
      </Container>
    </DefaultLayout>
  );
};

export const Home = HomePage;
