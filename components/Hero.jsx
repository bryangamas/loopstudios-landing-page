import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="Hero">
      <Header></Header>
      <div className="Header__title-container">
        <h1 className="Header__title">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
      <style jsx>
        {`
          .Hero {
            background-image: url("/images/mobile/image-hero.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            height: 66.7rem;
            padding: 2rem;
            width: 100vw;
          }

          .Header__title-container {
            grid-row: 2 / 4;
            align-self: center;
            justify-self: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20rem;
            width: clamp(33.5rem, 70%, 65.6rem);
            padding: 2rem 2.8rem;
            border: 2px solid var(--white);
          }

          .Header__title {
            color: var(--white);
            font-family: "Josefin Sans", sans-serif;
            font-size: 4rem;
            font-weight: 200;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
