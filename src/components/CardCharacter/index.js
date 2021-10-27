import { Container, StyledImage } from './styles';

import router from 'next/router';

export default function CardCharacter({ character }) {
  const imgFormatted = `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`;

  return (
    <Container onClick={() => router.push(`/character/${character.id}`)}>
      <div className="characterImage">
        <StyledImage
          src={imgFormatted}
          alt={character.name}
          width={300}
          height={300}
        />
      </div>

      <div className="characterName">
        <h3>{character.name}</h3>
      </div>
    </Container>
  );
}