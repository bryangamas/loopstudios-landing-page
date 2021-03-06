import React from "react";
import { creationListDesktop } from "utils/creationsList";

const CreationItem = ({ mobile, index }) => {
  const desktop = creationListDesktop[index];
  return (
    <figure>
      <picture>
        <source media="(min-width:1110px)" srcSet={desktop.src} />
        <img src={mobile.src} alt={mobile.alt} />
        <div className="image-shadow"></div>
      </picture>
      <figurecaption>{mobile.alt}</figurecaption>
      <style jsx>
        {`
          figure {
            position: relative;
            cursor: pointer;
          }

          .image-shadow {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            box-shadow: inset 100px 0px 60px rgba(0, 0, 0, 0.6);
          }

          figurecaption {
            position: absolute;
            left: 2.2rem;
            bottom: 2.5rem;
            width: 45%;
            font-family: "Josefin Sans", sans-serif;
            font-size: 2.5rem;
            text-align: left;
            color: var(--white);
          }

          @media (min-width: 1110px) {
            .image-shadow {
              box-shadow: inset 0px -150px 80px rgba(0, 0, 0, 0.6);
            }

            figure:hover picture {
              opacity: 25%;
              transition: opacity 0.4s;
            }

            figure:hover figurecaption {
              color: black;
              font-weight: bold;
            }
          }
        `}
      </style>
    </figure>
  );
};

export default CreationItem;
