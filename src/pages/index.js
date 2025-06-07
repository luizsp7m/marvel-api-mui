import router from "next/router";
import Layout from "../components/Layout";

import { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";

export default function Home() {
  useEffect(() => {
    router.push("/page/1");
  }, []);

  return (
    <Layout title="Home">
      <Grid container justifyContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    </Layout>
  );
}
