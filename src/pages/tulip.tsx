import type { NextPage } from "next";
import Head from "next/head";
import { TulipView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Orca Track!</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <TulipView />
    </div>
  );
};

export default Home;
