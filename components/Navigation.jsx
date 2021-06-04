import useMediaQuery from "hooks/useMediaQuery";
import Link from "next/link";
import React from "react";
import { menuItemsList, upperMenuItemsList } from "utils/menuItemsList";

const Navigation = ({ upper = false }) => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__content">
        {(upper ? upperMenuItemsList : menuItemsList).map((item) => {
          return (
            <li className="Navigation__item" key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .Navigation__content {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          font-family: "Josefin Sans", sans-serif;
          font-size: 2.5rem;
          font-weight: 300;
        }

        @media (min-width: 1110px) {
          .Navigation__content {
            flex-direction: row;
            font-size: 1.8rem;
            font-weight: bold;
            font-family: "Josefin Sans", sans-serif;
            color: var(--white);
          }
          li {
            margin-inline-start: 3rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
