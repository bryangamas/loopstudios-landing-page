import React from "react";
import { creationListDesktop } from "utils/creationList";

const CreationItem = ({ mobile, index }) => {
  const desktop = creationListDesktop[index];
  return (
    <figure>
      <picture>
        <source media="(min-width:1000px)" srcSet={desktop.src} />
        <img src={mobile.src} alt={mobile.alt} />
        <div className="image-shadow"></div>
      </picture>
      <figurecaption>{mobile.alt}</figurecaption>
      <style jsx>
        {`
          figure {
            position: relative;
          }

          .image-shadow {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            box-shadow: inset 100px 0px 60px rgba(0, 0, 0, 0.6);
            z-index: 1;
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
            z-index: 2;
          }

          @media (min-width: 1000px) {
            .image-shadow {
              box-shadow: inset 0px -150px 80px rgba(0, 0, 0, 0.6);
            }
          }
        `}
      </style>
    </figure>
  );
};

export default CreationItem;
