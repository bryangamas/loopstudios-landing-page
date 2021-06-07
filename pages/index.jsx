import React from "react";
import { withRouter } from "next/router";

import Layout from "@components/Layout/Layout";
import CreationsSection from "@components/CreationsSection";
import MainSection from "@components/MainSection";

const Home = () => {
  return (
    <Layout>
      <MainSection />
      <CreationsSection />
    </Layout>
  );
};

export default withRouter(Home);
