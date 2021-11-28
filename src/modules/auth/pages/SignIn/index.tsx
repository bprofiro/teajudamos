import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';

import { useAuth } from '~/hooks/useAuth';
import { AuthLayout } from '~/layouts/AuthLayout';

import { Button } from '@/auth/components/Button';
import { Input } from '@/auth/components/Input';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, CreateUserContent } from './styles';

type SignInRequest = {
  email: string;
  password: string;
};

export const SignInPage = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();
  const { signIn, isAuthLoading } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInRequest) => {
      await signIn({ email: data.email, password: data.password });

      router.push('/feed');
    },
    [router, signIn],
  );

  return (
    <AuthLayout
      title="Entrar"
      image="understand-community"
      imageAlt="Quatro pessoas em cima de um celular azul trocando mensagens"
      imagePosition="right"
    >
      <Container>
        <Image
          src={`/assets/images/logo/blue-logo.svg`}
          alt="Circulo com quatro peças de qubra cabeça dentro e ao seu lado a palavra Te ajudamos, todos esses detalhes são da cor azul"
          height={90}
          width={200}
        />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login na comunidade</h1>

          <p>Bem-vindo de volta ao TEAjudamos! Sentimos sua falta 😃</p>
          <Input name="email" placeholder="E-mail" label="E-mail:" />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            label="Senha:"
          />

          <Button type="submit">
            {isAuthLoading ? 'Carregando' : 'Entrar'}
          </Button>
        </Form>

        <CreateUserContent>
          <span>
            Não tem conta?
            <Link href="/auth/sign-up" passHref>
              <a>Cadastre-se!</a>
            </Link>
          </span>
        </CreateUserContent>
      </Container>
    </AuthLayout>
  );
};

export const SignIn = SignInPage;
