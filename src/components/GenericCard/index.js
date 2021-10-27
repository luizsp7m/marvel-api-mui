import { Container, StyledImage } from './styles';

export default function GenericCard({ item }) {
  const imgFormatted = `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`;

  return (
    <Container>
      <div className="cardImage">
        <StyledImage
          src={imgFormatted}
          alt={item.title}
          width={300}
          height={450}
        />
      </div>

      <div className="cardBody">
        <h5>{item.title}</h5>
      </div>
    </Container>
  );
}
