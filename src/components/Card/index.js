import router from 'next/router';

import { Container } from './styles';

export default function CardCharacter({ content, type = 'character' }) {
  const imgFormatted = `${content.thumbnail.path}/portrait_uncanny.${content.thumbnail.extension}`;

  return (
    <Container onClick={() => type === 'character' && router.push(`/character/${content.id}`)}>
      <img src={imgFormatted} alt={type === 'character' ? content.name : content.title} />
      { type === 'character' ? <h3>{content.name}</h3> : <p>{content.title}</p>}
    </Container>
  );
}