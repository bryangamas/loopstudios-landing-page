import React, { useState } from "react";
import ModalMenu from "@components/Header/ModalMenu";

const HamburgerMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <i className="Header__menu-icon" onClick={handleToggleModal} />
      <ModalMenu show={showModal} onClose={handleToggleModal} />
      <style jsx>{`
        .Header__menu-icon {
          background-image: url("/icons/icon-hamburger.svg");
          background-repeat: no-repeat;
          background-size: cover;
          width: 24px;
          height: 16px;
          justify-self: end;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;
