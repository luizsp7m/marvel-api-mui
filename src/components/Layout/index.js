import { Container, Content } from './styles';

import Header from "../Header";

import Head from 'next/head';

export default function Layout({ children, title = "Page without title" }) {
  return (
    <Container>
      <Head>
        <title>Marvel API | { title }</title>
      </Head>

      <Header />
      
      <Content>
        {children}
      </Content>
    </Container>
  );
}