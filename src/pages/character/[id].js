import Layout from '../../components/Layout';
import CharacterInformation from '../../components/CharacterInformation';
import GenericCard from '../../components/GenericCard';
import Title from '../../components/Title';

import { api } from '../../services/api';

import { Grid } from '@mui/material';

import { useRouter } from 'next/router'

const MAX = 1; // 16 x ${limit} = 1600

export async function getStaticPaths() {

  let characterList = [];
  let offset = 0;

  for (let i = 0; i < MAX; i++) { // Todos os 1549 personagens
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

  // Comics

  let comicList = result.data.data.results[0].comics.items;

  let comicUrlList = [];

  for (let i in comicList) {
    comicUrlList.push(comicList[i].resourceURI);
  }

  let comicsId = [];

  for (let i in comicUrlList) {
    comicsId.push(comicUrlList[i].split("/")[6]);
  }

  let comics = [];

  for (let i in comicsId) {
    const result = await api.get(`/comics/${comicsId[i]}`);

    comics.push(result.data.data.results);
  }

  // Series

  let serieList = result.data.data.results[0].series.items;

  let serieUrlList = [];

  for (let i in serieList) {
    serieUrlList.push(serieList[i].resourceURI);
  }

  let seriesId = [];

  for (let i in serieUrlList) {
    seriesId.push(serieUrlList[i].split("/")[6]);
  }

  let series = [];

  for (let i in seriesId) {
    const result = await api.get(`/series/${seriesId[i]}`);

    series.push(result.data.data.results);
  }

  return {
    props: {
      character: result.data.data.results,
      comics: comics,
      series: series,
    }
  }
}

export default function CharacterPage({ character, comics, series }) {
  const router = useRouter();

  return (
    <Layout title={character[0].name}>

      <button onClick={() => router.back()}>Back</button>

      <div className="description">
        <Title>Description</Title>
        <CharacterInformation character={character[0]} />
      </div>

      <div className="comics">
        <Title>Comics</Title>
        <Grid container spacing={3} my={3}>
          {comics.map(comic => (
            <Grid key={comic[0].id} item xs={6} sm={4} md={3} lg={2}>
              <GenericCard item={comic[0]} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="series">
        <Title>Series</Title>
        <Grid container spacing={3} my={3}>
          {series.map(serie => (
            <Grid key={serie[0].id} item xs={6} sm={4} md={3} lg={2}>
              <GenericCard item={serie[0]} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}