import Layout from "../../components/Layout";
import CharacterInformation from "../../components/CharacterInformation";
import GenericCard from "../../components/GenericCard";
import Title from "../../components/Title";

import { api } from "../../services/api";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import Error from "next/error";

export default function CharacterPage({
  character,
  comics,
  series,
  errorCode,
}) {
  const router = useRouter();

  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <Layout title={character.name}>
      <button onClick={() => router.back()}>Back</button>

      <div className="description">
        <CharacterInformation character={character} />
      </div>

      {/* <div className="comics">
        <Title>Comics</Title>
        <Grid container spacing={3} mt={3} mb={6}>
          {comics.map((comic) => (
            <Grid key={comic.id} item xs={6} sm={4} md={3} lg={2}>
              <GenericCard item={comic} />
            </Grid>
          ))}
        </Grid>
      </div> */}

      {/* <div className="series">
        <Title>Series</Title>
        <Grid container spacing={3} mt={3} mb={6}>
          {series.map((serie) => (
            <Grid key={serie.id} item xs={6} sm={4} md={3} lg={2}>
              <GenericCard item={serie} />
            </Grid>
          ))}
        </Grid>
      </div> */}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const result = await api.get(`characters/${params.id}`);
    const character = result.data.data.results[0];

    // const comics = await Promise.all(
    //   character.comics.items.map(async (comicUrl) => {
    //     const comicId = comicUrl.resourceURI.split("/").pop();
    //     const comic = await api.get(`comics/${comicId}`);
    //     return comic.data.data.results[0];
    //   })
    // );

    // const series = await Promise.all(
    //   character.series.items.map(async (serieUrl) => {
    //     const serieId = serieUrl.resourceURI.split("/").pop();
    //     const serie = await api.get(`series/${serieId}`);
    //     return serie.data.data.results[0];
    //   })
    // );

    return {
      props: {
        character,
        comics: [],
        series: [],
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: error?.response?.status || 500,
      },
    };
  }
}
