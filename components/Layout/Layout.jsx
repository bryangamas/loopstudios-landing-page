import Footer from "@components/Footer";
import Hero from "@components/Hero";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
