import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';

type Props = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText?: string;
  link?: string;
  imagePosition: 'left' | 'right';
};

export const Section = ({
  description,
  image,
  imageAlt,
  link,
  linkText,
  title,
  imagePosition,
}: Props) => {
  return imagePosition === 'left' ? (
    <Container>
      <div>
        <Image
          src={`/assets/images/landingPage/${image}.svg`}
          alt={imageAlt}
          height={320}
          width={480}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        {!!link && (
          <Link href={link} passHref>
            <a>{linkText}</a>
          </Link>
        )}
      </div>
    </Container>
  ) : (
    <Container>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        {!!link && (
          <Link href={link} passHref>
            <a>{linkText}</a>
          </Link>
        )}
      </div>

      <div>
        <Image
          src={`/assets/images/landingPage/${image}.svg`}
          alt={imageAlt}
          height={320}
          width={480}
        />
      </div>
    </Container>
  );
};
