import type { NextPage } from "next";
import Head from "next/head";
import { AllBridgeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>AllBridge Track!</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <AllBridgeView />
    </div>
  );
};

export default Home;
