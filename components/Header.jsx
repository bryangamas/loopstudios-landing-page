import React from "react";

const Header = () => {
  return (
    <header className="Header">
      <figure className="Header__logo">
        <img src="/images/logo.svg" alt="loopstudios logo" />
      </figure>
      <i className="Header__menu-icon" />
      <style jsx>{`
        .Header {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          height: 3.5rem;
          align-items: center;
        }

        .Header__logo {
          width: 15.5rem;
        }

        .Header__menu-icon {
          background-image: url("/icons/icon-hamburger.svg");
          background-repeat: no-repeat;
          background-size: cover;
          width: 24px;
          height: 16px;
          justify-self: end;
        }
      `}</style>
    </header>
  );
};

export default Header;
