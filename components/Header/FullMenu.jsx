import Navigation from "@components/Navigation";
import React from "react";

const FullMenu = () => {
  return (
    <>
      <Navigation />
      <style jsx>{`
        :global(.Navigation) {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </>
  );
};

export default FullMenu;
