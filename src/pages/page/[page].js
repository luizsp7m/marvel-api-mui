import { Grid } from "@mui/material";

import Layout from "../../components/Layout";
import CardCharacter from "../../components/CardCharacter";
import Title from "../../components/Title";
import Pagination from "../../components/Pagination";

import { useRouter } from 'next/router';

import { api } from '../../services/api';

const MAX = 90; // 1560 // Quantidade de personagens
const LIMIT_PER_PAGE = 18;
const NUM_PAGES = Math.round(MAX / LIMIT_PER_PAGE);

export function getStaticPaths() {
  let pages = [];

  for (let i = 1; i <= NUM_PAGES; i++) {
    pages.push({ params: { page: i + '' } });
  }

  console.log(pages); // Páginas

  return {
    fallback: true, // false = 404
    paths: pages,
  }
}

export async function getStaticProps({ params }) {

  const result = await api.get("/characters", {
    params: {
      limit: LIMIT_PER_PAGE,
      offset: LIMIT_PER_PAGE * params.page - LIMIT_PER_PAGE,
    }
  });

  return {
    props: {
      characters: result.data.data.results,
    }
  }
}

export default function CharactersPage({ characters = {} }) {
  const router = useRouter();

  if(router.isFallback) return (
    <Layout title="Loading...">
      <h5 className="loading">Loading...</h5>
    </Layout>
  )

  return (
    <Layout title="Characters">
      <Title>Characters</Title>

      <Grid container spacing={3} my={3} mb={6}>
        {characters.map(character => (
          <Grid key={character.id} item xs={6} sm={4} md={3} lg={2}>
            <CardCharacter character={character} />
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Pagination numPages={NUM_PAGES} />
        </Grid>
      </Grid>
    </Layout>
  );
}