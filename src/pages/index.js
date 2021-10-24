import { useEffect } from "react";

import router from 'next/router';

import Layout from '../components/Layout';

export default function Home() {
  useEffect(() => {
    router.push("/page/1");
  }, []);

  return (
    <Layout title="Home">

    </Layout>
  );
}