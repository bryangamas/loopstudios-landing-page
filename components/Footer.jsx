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
              <Link key={media.id} href="#">
                <picture className="Footer_icon">
                  <img src={media.icon} alt={media.title} />
                </picture>
              </Link>
            ))}
          </div>
          <div className="Footer_derechos">
            © 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
      <style jsx>{`
        .Footer {
          display: flex;
          justify-content: center;
          background-color: black;
          padding-inline: var(--padding-inline-mobile);
          width: 100%;
          color: var(--white);
        }

        .Footer__content {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          justify-content: center;
          height: 47.1rem;
          width: 100%;
          max-width: 1110px;
        }

        .Footer__main {
          margin: 0 auto;
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
          margin-inline: 8px;
          width: 24px;
          cursor: pointer;
        }

        .Footer_derechos {
          color: var(--dark-gray);
        }

        @media (min-width: 1110px) {
          .Footer__content > * {
            margin: 0;
            padding: 0;
          }
          .Footer__content {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(1, 1fr);
            height: 16rem;
          }
          .Footer__main {
            justify-self: left;
            justify-content: space-evenly;
          }
          .Footer__logo {
            flex-grow: initial;
          }
          Footer :global(.Navigation) {
            flex-grow: initial;
          }
          .Footer_info {
            justify-self: right;
            align-items: flex-end;
            grid-row: initial;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
