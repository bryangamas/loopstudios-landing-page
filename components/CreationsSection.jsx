import Link from "next/link";
import React from "react";
import { creationListMobile } from "../utils/creationsList";
import CreationItem from "./CreationItem";

const CreationsSection = () => {
  return (
    <section className="CreationsSection" id="CreationsSection">
      <h2 className="CreationsSection__title">OUR CREATIONS</h2>
      <div className="Creations-container">
        {creationListMobile.map((item, index) => {
          return <CreationItem key={item.id} mobile={item} index={index} />;
        })}
      </div>
      <Link href="#CreationsSection">
        <a className="CreationsSection__button">SEE ALL</a>
      </Link>

      <style jsx>
        {`
          .CreationsSection {
            display: grid;
            padding-inline: var(--padding-inline-mobile);
            padding-block-start: 4rem;
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
            cursor: pointer;
          }

          @media (min-width: 1110px) {
            .CreationsSection {
              grid-template-columns: repeat(2, 1fr);
            }

            .CreationsSection__button {
              grid-column: 2 / 3;
              margin: 0;
              justify-self: end;
            }

            .CreationsSection__button:hover {
              background-color: var(--black);
              color: var(--white);
              font-weight: 300;
              transition-property: background-color color;
              transition-duration: 0.4s;
            }

            .Creations-container {
              grid-column: 1 / 3;
              grid-row: 2 / 3;
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
