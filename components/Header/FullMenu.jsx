import React from "react";
import { menuItemsList } from "utils/menuItemsList";

const FullMenu = () => {
  return (
    <nav>
      <ul className="Modal__content">
        {menuItemsList.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.href}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: flex-end;
        }
        ul {
          display: flex;
          font-size: 1.8rem;
          font-weight: bold;
          font-family: "Josefin Sans", sans-serif;
          color: var(--white);
        }
        li {
          margin-inline-start: 3rem;
        }
      `}</style>
    </nav>
  );
};

export default FullMenu;
