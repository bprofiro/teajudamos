import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState } from 'react';

import { AuthLayout } from '~/layouts/AuthLayout';

import { Button } from '@/auth/components/Button';
import { Input } from '@/auth/components/Input';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, CreateUserContent } from './styles';

type SignUpHealthProfessionalRequest = {
  name: string;
  email: string;
  password: string;
};

export const SignUpHealthProfessionalPage = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignUpHealthProfessionalRequest) => {
      console.log({ data });

      // Eu to usando o unform pra pegar os valores dos formulários,
      // então quando o usuário der o submit, o "data" vai ser um objeto com os valores do input,
      // tudo pronto pra mandar pra API.

      setIsCreatingUser(true);

      router.push('/auth/sign-in');
      setIsCreatingUser(false);
    },
    [router],
  );

  return (
    <AuthLayout
      title="Cadastro De Profissionais da Saúde"
      image="health-professional"
      imageAlt="Um médico negro de cabelos curtos e óculos de braços cruzados e ao seu redor vários comprimidos"
      imagePosition="left"
    >
      <Container>
        <Image
          src={`/assets/images/logo/blue-logo.svg`}
          alt="Circulo com quatro peças de qubra cabeça dentro e ao seu lado a palavra Te ajudamos, todos esses detalhes são da cor azul"
          height={90}
          width={200}
        />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça parte da Equipe!</h1>

          <p>
            Você gosta de ajudar pessoas e quer contribuir conosco nessa
            jornada? Então faça parte da comunidade como profissional da saúde e
            colabore!
          </p>
          <Input
            name="name"
            placeholder="Digite seu nome completo"
            label="Nome completo:"
          />
          <Input
            name="email"
            placeholder="Insira o seu melhor e-mail"
            label="E-mail:"
          />
          <Input
            name="crp-or-crm"
            placeholder="Insira o número do seu CRM"
            label="CRP ou CRM"
          />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            label="Senha:"
          />

          <Button type="submit">
            {isCreatingUser ? 'Carregando' : 'Cadastrar'}
          </Button>
        </Form>

        <CreateUserContent>
          <span>
            Já tem conta?
            <Link href="/auth/sign-in" passHref>
              <a>Entre agora!</a>
            </Link>
          </span>

          <p>
            Não é um profissional da saúde?
            <Link href="/auth/sign-in" passHref>
              <a>cadastre-se</a>
            </Link>
            e faça parte dessa comunidade!
          </p>
        </CreateUserContent>
      </Container>
    </AuthLayout>
  );
};

export const SignUpHealthProfessional = SignUpHealthProfessionalPage;
