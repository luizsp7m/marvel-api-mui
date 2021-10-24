import { Container, Image, Description } from './styles';

export default function CharacterInformation({ character }) {
  const imgFormatted = `${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`;

  return (
    <Container>
      <Image>
        <img src={imgFormatted} alt={character.name} />
      </Image>

      <Description>
        <h1>{character.name}</h1>

        <p>{character.description === "" ? "He is a character that someone forgot to fill in his description. But One thing's for certain: at some point it had its importance." : character.description}</p>
      </Description>
    </Container>
  );
}