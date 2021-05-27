import React from "react";
import { creationListDesktop, creationListMobile } from "../utils/creationList";

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
            box-shadow: inset 100px 0px 60px rgba(0, 0, 0, 0.5);
            z-index: 1;
          }

          figurecaption {
            position: absolute;
            left: 2.2rem;
            bottom: 2.5rem;
            width: 40%;
            font-family: "Josefin Sans", sans-serif;
            font-size: 2.5rem;
            text-align: left;
            color: var(--white);
            z-index: 2;
          }
        `}
      </style>
    </figure>
  );
};

const CreationsSection = () => {
  return (
    <section className="CreationsSection">
      <h2 className="CreationsSection__title">OUR CREATIONS</h2>
      <div className="Creations-container">
        {creationListMobile.map((item, index) => {
          return <CreationItem key={item.id} mobile={item} index={index} />;
        })}
      </div>
      <style jsx>
        {`
          .CreationsSection {
            padding-inline: var(--padding-inline-mobile);
            padding-block-end: 2.3rem;
          }

          .Creations-container {
            display: grid;
            grid-template-rows: repeat(${creationListMobile.length}, 1fr);
            align-items: center;
            row-gap: 2.3rem;
          }

          .CreationsSection__title {
            margin-block-end: 5.4rem;
          }

          @media (min-width: 1000px) {
            .Creations-container {
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: repeat(${creationListMobile.length / 2}, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
};

export default CreationsSection;
