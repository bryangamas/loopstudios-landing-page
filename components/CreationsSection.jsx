import React from "react";
import { creationListMobile } from "../utils/creationList";
import CreationItem from "./CreationItem";

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
