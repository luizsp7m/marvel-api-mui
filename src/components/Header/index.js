import { Container } from './styles'

export default function Header() {
  const logoUrl = "https://www.thegeekgeneration.com/wp-content/uploads/2009/12/thumbnail-marvel-character-logo.jpg";

  return (
    <Container>
      <img src={logoUrl} alt="Marvel Logo" />
    </Container>
  );
}