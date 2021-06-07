import React from "react";
import { withRouter } from "next/router";

import CreationsSection from "@components/CreationsSection";
import Hero from "@components/Hero";
import MainSection from "@components/MainSection";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <MainSection />
      <CreationsSection />
      <Footer />
    </>
  );
};

export default withRouter(Home);
