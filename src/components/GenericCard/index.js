import { Container } from './styles';

import Image from 'next/image';

export default function GenericCard({ item }) {
  const imgFormatted = `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`;

  return (
    <Container>
      <Image
        src={imgFormatted}
        alt={item.name}
        width={300}
        height={450}
      />
    </Container>
  );
}