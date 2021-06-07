import Link from "next/link";
import React from "react";
import { socialMediaList } from "utils/socialMediaList";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__content">
        <div className="Footer__main">
          <Link href="#">
            <picture className="Footer__logo">
              <img src="/images/logo.svg" alt="loopstudios logo" />
            </picture>
          </Link>
          <Navigation center />
        </div>
        <div className="Footer_info">
          <div className="Footer_redes">
            {socialMediaList.map((media) => (
              <picture key={media.id} className="Footer_icon">
                <img src={media.icon} alt={media.title} />
              </picture>
            ))}
          </div>
          <div className="Footer_derechos">
            © 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
      <style jsx>{`
        .Footer {
          background-color: black;
          padding-inline: var(--padding-inline-mobile);
          height: 47.1rem;
          width: 100%;
          color: var(--white);
        }

        .Footer__content {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          justify-items: center;
          height: 100%;
        }

        .Footer__main {
          padding-block-start: 2.4rem;
          padding-block-end: 1.2rem;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
        }

        .Footer__logo {
          display: flex;
          align-items: center;
          flex-grow: 4;
          width: 14.2rem;
          cursor: pointer;
        }

        Footer :global(.Navigation) {
          flex-grow: 6;
        }

        .Footer_info {
          grid-row: 3 / 4;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding-block-start: 2.4rem;
          padding-block-end: 4.8rem;
        }

        .Footer_redes {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .Footer_icon {
          display: inline-block;
          width: 24px;
          margin-inline: 8px;
        }

        .Footer_derechos {
          color: var(--dark-gray);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
