import { Container, Content } from './styles';

import Header from "../Header";

import Head from 'next/head';

export default function Layout({ children, title = "Page without title" }) {
  return (
    <Container>
      <Head>
        <title>Marvel API | { title }</title>
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </Head>

      <Header />
      
      <Content>
        {children}
      </Content>
    </Container>
  );
}