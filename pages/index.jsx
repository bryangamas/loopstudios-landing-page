import CreationsSection from "@components/CreationsSection";
import Hero from "@components/Hero";
import MainSection from "@components/MainSection";
import React from "react";
import { withRouter } from "next/router";

const Home = () => {
  return (
    <>
      <Hero />
      <MainSection />
      <CreationsSection />
    </>
  );
};

export default withRouter(Home);
