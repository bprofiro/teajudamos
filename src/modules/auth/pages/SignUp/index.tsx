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
import api from '~/services/api';

type SignUpRequest = {
  name: string;
  email: string;
  password: string;
  type:number;
};

export const SignUpPage = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const handleSubmit = useCallback(
      async (data: SignUpRequest) => {
      console.log({ data});
      try{
          await api.post('/user/create',{
            nome:data.name,
            email:data.email,
            senha:data.password,
            //tipo:data.type
          })
      }catch(err){
        console.log(err)
      }
      setIsCreatingUser(true);
      router.push('/auth/sign-in');
      setIsCreatingUser(false);
    },
    [router],
  );

  return (
    <AuthLayout
      title="Cadastro"
      image="understand-community"
      imageAlt="Quatro pessoas em cima de um celular azul trocando mensagens"
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
          <h1>Faça parte da comunidade</h1>

          <p>
            Muito legal ter você conosco! Realize seu cadastro e faça parte
            dessa linda comunidade 😍
          </p>
          <Input
            name="name"
            placeholder="Digite seu nome completo"
            label="Nome completo:"
          />
          <Input name="email" placeholder="E-mail" label="E-mail:" />
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
            Ou
            <Link href="/auth/sign-in" passHref>
              <a>Cadastre-se</a>
            </Link>
            como Profissional da saúde
          </p>
        </CreateUserContent>
      </Container>
    </AuthLayout>
  );
};

export const SignUp = SignUpPage;
