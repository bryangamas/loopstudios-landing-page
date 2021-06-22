import Navigation from "@components/Navigation";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ModalContent = ({ onClose, show }) => {
  return (
    <div className={`Modal ${show ? "" : "hidden"}`}>
      <div className="Modal__header">
        <picture className="Modal__logo">
          <img src="/images/logo.svg" alt="loopstudios logo" />
        </picture>
        <i className="Modal__close" onClick={onClose} />
      </div>
      <Navigation upper largeFontSize></Navigation>
      <style jsx>{`
        .Modal {
          display: grid;
          grid-template-rows: repeat(6, 1fr);
          position: fixed;
          padding-inline: var(--padding-inline-mobile);
          height: 100vh;
          width: 100vw;
          background-color: #000;
          min-width: 320px;
          z-index: 1;
          transition: transform 0.8s;
        }

        .Modal.hidden {
          transform: translate(100vw);
        }

        .Modal__header {
          margin-block-start: 3.5rem;
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

        .Modal > :global(.Navigation) {
          grid-row: 3 / 5;
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

  const modalContent = <ModalContent onClose={onClose} show={show} />;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default ModalMenu;
