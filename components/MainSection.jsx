import React from "react";

const MainSection = () => {
  return (
    <main className="Main">
      <section>
        <picture>
          <source
            media="(min-width:1000px)"
            srcset="/images/desktop/image-interactive.jpg"
          />
          <img src="/images/mobile/image-interactive.jpg" alt="interactive" />
        </picture>
      </section>
      <section>
        <h2 className="Main__title">THE LEADER IN INTERACTIVE VR</h2>
        <p className="Main__description">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-wining creations have transformed businesses through digital
          experiences that bind to their brand
        </p>
      </section>
      <section></section>
      <style jsx>{`
        .Main {
          padding-inline: var(--padding-inline-mobile);
          color: var(--very-dark-gray);
        }

        .Main > section :nth-child(2) {
          padding-inline: 2.8rem;
        }

        .Main__title {
          font-family: "Josefin Sans", sans-serif;
          font-size: 3rem;
        }
      `}</style>
    </main>
  );
};

export default MainSection;
