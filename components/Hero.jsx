import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <Header></Header>
        <div className="Hero__title-container">
          <h1 className="Hero__title">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
      <div className="background-shadow"></div>
      <style jsx>
        {`
          .Hero {
            background-image: url("/images/mobile/image-hero.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding-block: 3.5rem;
            padding-inline: var(--padding-inline-mobile);
            width: 100%;
            height: 66.7rem;
          }

          .Hero__content {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            height: 100%;
          }

          .background-shadow {
            display: none;
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
            padding: 2rem 1.5rem;
            border: 2px solid var(--white);
          }

          .Hero__title {
            color: var(--white);
            font-family: "Josefin Sans", sans-serif;
            font-size: 3.2rem;
            font-weight: 200;
            text-align: left;
          }

          @media (min-width: 370px) {
            .Hero__title {
              font-size: 4rem;
            }

            .Hero__title-container {
              padding: 2rem 2.5rem;
            }
          }
          @media (min-width: 700px) {
            .Hero {
              display: grid;
            }
          }

          @media (min-width: 1110px) {
            .Hero {
              position: relative;
              padding-block: 0;
              background-image: url(/images/desktop/image-hero.jpg);
              background-position-y: top;
              height: auto;
            }
            .background-shadow {
              display: block;
              background-color: rgba(0, 0, 0, 0.32);
              position: absolute;
              height: 100%;
              width: 100%;
            }
            .Hero__content {
              grid-template-rows: repeat(8, 1fr);
              z-index: 1;
              justify-self: center;
              width: 1110px;
            }

            .Hero__title-container {
              grid-row: 3 / 8;
              margin-block: 6.3rem;
              justify-self: left;
              align-items: center;
              padding-inline: 4.2rem;
              width: 65.6rem;
              height: 28rem;
            }

            .Hero__title {
              font-size: 7rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
