import router from 'next/router';

import { Container } from './styles';

import Image from 'next/image';

export default function CardCharacter({ content, type = 'character' }) {
  const imgFormatted = `${content.thumbnail.path}/portrait_uncanny.${content.thumbnail.extension}`;

  return (
    <Container onClick={() => type === 'character' && router.push(`/character/${content.id}`)}>
      <Image 
        src={imgFormatted} 
        alt={type === 'character' ? content.name : content.title} 
        width={300}
        height={450}
      />
      { type === 'character' ? <h3>{content.name}</h3> : <p>{content.title}</p>}
    </Container>
  );
}