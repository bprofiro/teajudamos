import { FaRegComment } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';

import { getDateDistanceFromNow } from '~/utils/get-date-distante-from-now';

import { Posts } from '@/feed/types';

import { Container } from './styles';

type Props = {
  post: Posts;
};

export const Post = ({ post }: Props) => {
  return (
    <Container>
      <header>
        <strong>{post.usuario.nome}</strong>

        <span>{getDateDistanceFromNow(post.dateTime)}</span>
      </header>

      <main>
        <p>{post.content}</p>
      </main>

      <hr />

      <footer>
        <button>
          <FiThumbsUp />
          Curtir
        </button>
        <button>
          <FaRegComment />
          Comentar
        </button>
      </footer>
    </Container>
  );
};
