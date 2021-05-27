import React from "react";

const MainSection = () => {
  return (
    <main className="Main">
      <section>
        <picture>
          <source
            media="(min-width:1000px)"
            srcSet="/images/desktop/image-interactive.jpg"
          />
          <img src="/images/mobile/image-interactive.jpg" alt="interactive" />
        </picture>
      </section>
      <section>
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p className="Main__description">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-wining creations have transformed businesses through digital
          experiences that bind to their brand
        </p>
      </section>
      <style jsx>{`
        .Main {
          display: grid;
          row-gap: 4rem;
          padding-inline: var(--padding-inline-mobile);
          padding-block-start: 9.6rem;
          padding-block-end: 10rem;
          color: var(--very-dark-gray);
        }

        .Main > section :nth-child(2) {
          padding-inline: 2.8rem;
          display: grid;
          row-gap: 2.4rem;
        }

        .Main__description {
          line-height: 2.5rem;
        }
      `}</style>
    </main>
  );
};

export default MainSection;
