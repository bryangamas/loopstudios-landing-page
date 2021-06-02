import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import FullMenu from "./FullMenu";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Header = () => {
  const isBreakpoint = useMediaQuery(1110);

  return (
    <header className="Header">
      <Link href="#">
        <picture className="Header__logo">
          <img src="/images/logo.svg" alt="loopstudios logo" />
        </picture>
      </Link>
      {isBreakpoint ? <FullMenu /> : <HamburgerMenu />}
      <style jsx>{`
        .Header {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          height: 3.5rem;
          align-items: center;
        }

        .Header__logo {
          width: 14.2rem;
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
