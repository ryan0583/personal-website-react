import HeaderImg from "../../img/Header.jpg";
import NavLink from "../NavLink/NavLink";
import "./NavBar.css";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setYPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [yPosition]);

  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-dark pl-0 pr-0">
      <div className="container-fluid brand">
        <p
          className={`navbar-brand text-white pl-1 ${
            yPosition <= 100 && "hide"
          }`}
        >
          <img
            alt="Ryan Griffiths"
            className="img-fluid rounded-circle img-brand"
            src={HeaderImg}
          />{" "}
          Ryan Griffiths
        </p>

        <button
          className="navbar-toggler ml-auto rounded-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <NavLink href="#home" linkText="Home" />
            <NavLink href="#about" linkText="About" />
            <NavLink href="#experience" linkText="Experience" />
            <NavLink href="#personal" linkText="Personal Projects" />
            <NavLink href="#music" linkText="Music" />
            <NavLink href="#contact" linkText="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
