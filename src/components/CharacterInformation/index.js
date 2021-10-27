import { Container, ImageContainer, Description, StyledImage } from './styles';

export default function CharacterInformation({ character }) {
  const imgFormatted = `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`;

  return (
    <Container>
      <ImageContainer>
        <StyledImage
          src={imgFormatted}
          alt={character.name}
          width={250}
          height={250}
        />
      </ImageContainer>

      <Description>
        <h1>{character.name}</h1>

        <p>{character.description === "" ? "He is a character that someone forgot to fill in his description. But One thing's for certain: at some point it had its importance." : character.description}</p>

        {character.urls.length > 0 && (
          <div className="moreInformation">
            <span>More informations:</span>

            <div>
              {character.urls.map((url, index) => (
                <a key={index} href={url.url} target="_blank">{url.type}</a>
              ))}
            </div>
          </div>
        )}
      </Description>
    </Container>
  );
}