import React from "react";

const Header = () => {
  return (
    <header className="Header">
      <a href="#">
        <picture className="Header__logo">
          <img src="/images/logo.svg" alt="loopstudios logo" />
        </picture>
      </a>
      <i className="Header__menu-icon" />
      <style jsx>{`
        .Header {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          height: 3.5rem;
          align-items: center;
        }

        .Header__logo {
          width: 14.2rem;
        }

        .Header__menu-icon {
          background-image: url("/icons/icon-hamburger.svg");
          background-repeat: no-repeat;
          background-size: cover;
          width: 24px;
          height: 16px;
          justify-self: end;
          cursor: pointer;
        }

        @media (min-width: 1110px) {
          .Header {
            grid-row: 1/ 3;
            align-self: center;
          }
          .Header__logo {
            width: 19.2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
