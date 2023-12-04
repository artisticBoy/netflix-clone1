import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__content">
        <img
          onClick={() => history.push("/")}
          className="navbar__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="navbar__avatar"
          src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
