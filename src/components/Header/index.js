import { Container } from './styles'

import Image from 'next/image';

export default function Header() {
  return (
    <Container>
      <Image src="/assets/logo.jpg" alt="Marvel Logo" width={220} height={87} />
    </Container>
  );
}