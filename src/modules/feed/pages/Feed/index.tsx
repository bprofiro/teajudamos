import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { withAuth } from '~/hocs/withAuth';
import { useAuth } from '~/hooks/useAuth';
import { FeedLayout } from '~/layouts/FeedLayout';
import api from '~/services/api';

import { Posts } from '@/feed/types';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Input } from '../../components/Input';
import { Post } from '../../components/Post';
import { Container, PublicPostContainer } from './styles';

type PageProps = {
  posts: Posts[];
};

type PublicPostRequest = {
  postContent: string;
};

export const FeedPage = ({ posts: ssrData }: PageProps) => {
  const [posts, setPosts] = useState<Posts[]>(() => ssrData);
  const { user } = useAuth();

  const handlePostSubmit = (data: PublicPostRequest) => {
    const newPost: Posts = {
      id: uuidv4(),
      content: data.postContent,
      comentario: [],
      dateTime: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      likes: 0,
      usuario: {
        id: user.id,
        nome: user.name,
      },
    };

    setPosts([newPost, ...posts]);
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
            nome: 'wellingtonsouza2504@gmail.com',
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

export const Feed = withAuth(FeedPage);
