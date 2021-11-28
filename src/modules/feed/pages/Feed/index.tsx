import { GetServerSideProps } from 'next';

import { withAuth } from '~/hocs/withAuth';

import { Posts } from '@/feed/types';

import { Container } from './styles';

const ITEMS_PER_PAGE = 10;

type PageProps = {
  posts: Posts[];
};

export const FeedPage = ({ posts }: PageProps) => {
  return (
    <Container>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
        </div>
      ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      posts: [],
    },
  };
};

export const Feed = withAuth(FeedPage);
