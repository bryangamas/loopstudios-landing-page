import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="Hero">
      <Header></Header>
      <div className="Hero__title-container">
        <h1 className="Hero__title">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
      <style jsx>
        {`
          .Hero {
            background-image: url("/images/mobile/image-hero.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: inline-grid;
            grid-template-rows: repeat(4, 1fr);
            height: 66.7rem;
            padding: 3.5rem var(--padding-inline-mobile);
          }

          .Hero__title-container {
            grid-row: 2 / 4;
            align-self: center;
            justify-self: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20rem;
            max-width: 65.6rem;
            padding: 2rem 2.8rem;
            border: 2px solid var(--white);
          }

          .Hero__title {
            color: var(--white);
            font-family: "Josefin Sans", sans-serif;
            font-size: 4rem;
            font-weight: 200;
          }

          @media (min-width: 700px) {
            .Hero {
              display: grid;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
