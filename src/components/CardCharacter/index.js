import { Container } from './styles';

import Image from 'next/image';

import router from 'next/router';

export default function CardCharacter({ character }) {
  const imgFormatted = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`;

  return (
    <Container onClick={() => router.push(`/character/${character.id}`)}>
      <Image
        src={imgFormatted}
        alt={character.name}
        width={300}
        height={450}
      />

      <h3>{character.name}</h3>
    </Container>
  );
}