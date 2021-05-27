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

      <a href="#" className="CreationsSection__button">
        SEE ALL
      </a>

      <style jsx>
        {`
          .CreationsSection {
            display: grid;
            padding-inline: var(--padding-inline-mobile);
            padding-block-end: 9.5rem;
            max-width: 1110px;
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

          .CreationsSection__button {
            justify-self: center;
            display: flex;
            align-items: center;
            height: 4.1rem;
            width: 16rem;
            margin-block-start: 3.5rem;
            border: solid 1px black;
            justify-content: center;
            letter-spacing: 0.5rem;
            font-weight: bold;
          }

          @media (min-width: 1110px) {
            .Creations-container {
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(
                ${Math.ceil(creationListMobile.length / 4)},
                1fr
              );
              column-gap: 2.3rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default CreationsSection;
