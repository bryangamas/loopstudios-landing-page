import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ModalContent = ({ onClose }) => {
  return (
    <div className="Modal">
      <div className="Modal__header">
        <picture className="Modal__logo">
          <img src="/images/logo.svg" alt="loopstudios logo" />
        </picture>
        <i className="Modal__close" onClick={onClose} />
      </div>
      <nav>
        <ul className="Modal__content">
          <li>ABOUT</li>
          <li>CAREERS</li>
          <li>EVENTS</li>
          <li>PRODUCTS</li>
          <li>SUPPORT</li>
        </ul>
      </nav>
      <style jsx>{`
        .Modal {
          display: grid;
          grid-template-rows: repeat(4, 1fr);
          position: fixed;
          padding-block: 3.5rem;
          padding-inline: var(--padding-inline-mobile);
          height: 100vh;
          width: 100vw;
          background-color: #000;
          color: white;
          min-width: 320px;
          z-index: 1;
        }

        .Modal__header {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          height: 3.5rem;
        }

        .Modal__logo {
          width: 14.2rem;
          cursor: pointer;
        }

        .Modal__close {
          justify-self: end;
          background-image: url("/icons/icon-close.svg");
          background-repeat: no-repeat;
          background-size: cover;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        nav {
          grid-row: 2 / 4;
        }

        .Modal__content {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          font-family: "Josefin Sans", sans-serif;
          font-size: 2.5rem;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

const ModalMenu = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = <ModalContent onClose={onClose} />;

  if (isBrowser && show) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default ModalMenu;
