import { GetServerSideProps } from 'next';

import { withAuth } from '~/hocs/withAuth';
import { useAuth } from '~/hooks/useAuth';
import { FeedLayout } from '~/layouts/FeedLayout';

import { Posts } from '@/feed/types';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Input } from '../../components/Input';
import { Post } from '../../components/Post';
import { Container, PublicPostContainer } from './styles';

type PageProps = {
  posts: Posts[];
};

export const FeedPage = ({ posts }: PageProps) => {
  const { user } = useAuth();

  const handlePostSubmit = (data) => {
    console.log({ data });
  };

  return (
    <FeedLayout title="Comunidade">
      <Container>
        <PublicPostContainer>
          <span>{user?.name}</span>

          <Form onSubmit={handlePostSubmit}>
            <Input name="postContent" placeholder="Compartilhe sua história" />

            <button type="submit">Publicar</button>
          </Form>
        </PublicPostContainer>

        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Container>
    </FeedLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      posts: [
        {
          id: 2,
          content: `Oii! Seja bem vinde a nossa comunidade.\nAproveite seu espaço para contar um pouco sobre você e sua história, nós vamos adorar saber! `,
          dateTime: '2021-11-28T17:21:08.000+00:00',
          usuario: {
            id: 1,
            nome: 'Wellington Bezerra',
            email: 'wellingtonsouza2504@gmail.com',
            tipo: 'PAI',
            likes: 0,
            comentario: [],
            perfis: ['ADMIN'],
          },
          comentario: [],
        },
      ],
    },
  };
};

export const Feed = FeedPage;
