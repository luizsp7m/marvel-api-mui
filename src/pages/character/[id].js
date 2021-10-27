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
    fallback: true, // false = 404
    paths,
  }
}

export async function getStaticProps({ params }) {

  const result = await api.get(`characters/${params.id}`);

  // Comics
  const comics = result.data.data.results[0].comics.items.map(async (comicUrl) => {
    const comicId = comicUrl.resourceURI.split("/")[6];
    const comic = await api.get(`comics/${comicId}`);
    return comic.data.data.results[0];
  });

  // Series
  const series = result.data.data.results[0].series.items.map(async (serieUrl) => {
    const serieId = serieUrl.resourceURI.split("/")[6];
    const serie = await api.get(`series/${serieId}`);
    return serie.data.data.results[0];
  });

  return {
    props: {
      character: result.data.data.results[0],
      comics: await Promise.all(comics),
      series: await Promise.all(series),
    }
  }
}

export default function CharacterPage({ character, comics, series }) {
  const router = useRouter();

  if(router.isFallback) return (
    <Layout title="Loading...">
      <h5 className="loading">Loading...</h5>
    </Layout>
  )

  return (
    <Layout title={character.name}>

      <button onClick={() => router.back()}>Back</button>

      <div className="description">
        <CharacterInformation character={character} />
      </div>

      <div className="comics">
        <Title>Comics</Title>
        <Grid container spacing={3} mt={3} mb={6}>
          {comics.map(comic => (
            <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2}>
              <GenericCard item={comic} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="series">
        <Title>Series</Title>
        <Grid container spacing={3} mt={3} mb={6}>
          {series.map(serie => (
            <Grid key={serie.id} item xs={6} sm={4} md={3} lg={2}>
              <GenericCard item={serie} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}