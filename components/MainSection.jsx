import React from "react";

const MainSection = () => {
  return (
    <main className="Main">
      <section className="Main__photo">
        <picture>
          <source
            media="(min-width:1110px)"
            srcSet="/images/desktop/image-interactive.jpg"
          />
          <img src="/images/mobile/image-interactive.jpg" alt="interactive" />
        </picture>
      </section>
      <section className="Main__text">
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p className="Main__description">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </section>
      <style jsx>{`
        .Main {
          display: grid;
          row-gap: 4.8rem;
          padding-inline: var(--padding-inline-mobile);
          max-width: 1110px;
          padding-block-start: 9.6rem;
          padding-block-end: 5.8rem;
          color: var(--dark-gray);
        }

        .Main__text {
          padding-inline: 2.3rem;
          display: grid;
          row-gap: 1.5rem;
        }

        .Main__description {
          line-height: 2.5rem;
        }

        @media (min-width: 1110px) {
          .Main {
            padding: 0px;
            grid-template-rows: repeat(5, 1fr);
            row-gap: 0px;
            grid-template-columns: repeat(4, 1fr);
            column-gap: 3rem;
          }

          .Main__photo {
            grid-row: 2 / 5;
            grid-column: 1 / 4;
            width: 73rem;
          }

          .Main__text {
            background-color: var(--white);
            grid-row: 3 / 6;
            grid-column: 3 / 5;
            padding-block: 20%;
            padding-inline-start: 18%;
            margin-block: 2%;
          }
        }
      `}</style>
    </main>
  );
};

export default MainSection;
