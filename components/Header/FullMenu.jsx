import Navigation from "@components/Navigation";
import React from "react";

const FullMenu = () => {
  return (
    <div className="FullMenu">
      <Navigation />
      <style jsx>{`
        .FullMenu :global(.Navigation) {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
};

export default FullMenu;
