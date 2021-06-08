import Link from "next/link";
import React from "react";
import { menuItemsList, upperMenuItemsList } from "utils/menuItemsList";

const Navigation = ({
  upper = false,
  center = false,
  largeFontSize = false,
}) => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__content">
        {(upper ? upperMenuItemsList : menuItemsList).map((item) => {
          return (
            <li key={item.id} className="Navigation__item underline">
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
          align-items: ${center ? "center" : "flex-start"};
          justify-content: space-between;
          font-family: ${upper ? '"Josefin Sans"' : '"Alata"'}, sans-serif;
          font-size: ${largeFontSize ? "2.5rem" : "1.5rem"};
          font-weight: 300;
          color: var(--white);
        }

        @media (min-width: 1110px) {
          .Navigation__content {
            flex-direction: row;
            gap: 3rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
