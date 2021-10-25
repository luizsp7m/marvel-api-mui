import { Container, ImageContainer, Description } from './styles';

import Image from 'next/image';

export default function CharacterInformation({ character }) {
  const imgFormatted = `${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`;

  return (
    <Container>
      <ImageContainer>
        <Image
          src={imgFormatted}
          alt={character.name}
          width={250}
          height={250}
        />
      </ImageContainer>

      <Description>
        <h1>{character.name}</h1>

        <p>{character.description === "" ? "He is a character that someone forgot to fill in his description. But One thing's for certain: at some point it had its importance." : character.description}</p>
      </Description>
    </Container>
  );
}