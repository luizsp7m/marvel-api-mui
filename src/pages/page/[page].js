import { Grid } from "@mui/material";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Pagination from "../../components/Pagination";

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
    fallback: false, // false = 404
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

export default function CharactersPage({ characters }) {
  return (
    <Layout title="Characters">
      <Title>Characters</Title>

      <Grid container spacing={2} my={3}>
        {characters.map(character => (
          <Grid key={character.id} item xs={6} sm={4} md={3} lg={2}>
            <Card content={character} />
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