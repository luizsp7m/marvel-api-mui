import Layout from '../../components/Layout';
import CharacterInformation from '../../components/CharacterInformation';
import Card from '../../components/Card';
import Title from '../../components/Title';

import { api } from '../../services/api';

import { Grid } from '@mui/material';

import { useRouter } from 'next/router'

const MAX = 16; // 16

export async function getStaticPaths() {

  let characterList = [];
  let offset = 0;

  for (let i = 0; i < 1; i++) { // Todos os 1549 personagens
    const result = await api.get("/characters", {
      params: {
        limit: 90, // 100
        offset: offset,
      }
    });

    characterList.push(result.data.data.results);

    offset = offset + 100;

    console.log(`Valor do i: ${i}`);
  }

  let paths = [];

  for (let i = 0; i < characterList.length; i++) {
    characterList[i].map(character => {
      paths.push({ params: { id: `${character.id}` } });
    })
  }

  console.log(paths.length); // Número de páginas de personagens
  console.log(paths); // ID's

  return {
    fallback: false, // false = 404
    paths,
  }
}

export async function getStaticProps({ params }) {

  const result = await api.get(`characters/${params.id}`);

  let comicList = result.data.data.results[0].comics.items;

  let comicUrlList = [];

  for (let i in comicList) {
    comicUrlList.push(comicList[i].resourceURI);
  }

  let comicId = [];

  for (let i in comicUrlList) {
    comicId.push(comicUrlList[i].split("/")[6]);
  }

  let comics = [];

  for (let i in comicId) {
    const result = await api.get(`/comics/${comicId[i]}`);

    comics.push(result.data.data.results);
  }

  return {
    props: {
      character: result.data.data.results,
      comics: comics,
    }
  }
}

export default function CharacterPage({ character, comics }) {
  const router = useRouter();

  return (
    <Layout title={character[0].name}>

      <h5 onClick={() => router.back()}>Back</h5>

      <Title>Profile</Title>

      <CharacterInformation character={character[0]} />

      <Title>Comics</Title>

      <Grid container spacing={3} my={3}>
        {comics.map(comic => (
          <Grid key={comic[0].id} item xs={6} sm={4} md={3} lg={2}>
            <Card content={comic[0]} type="comic" />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}