import { Container } from './styles';

type Props = {
  name: string;
  description: string;
};

export const ProfessionalCard = ({ description, name }: Props) => {
  return (
    <Container>
      <strong>{name}</strong>

      <span>{description}</span>

      <button>Chamar</button>
    </Container>
  );
};
