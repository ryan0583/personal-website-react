import HeaderImg from "../../img/Header.jpg";
import NavLink from "../NavLink/NavLink";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-default navbar-expand-lg navbar-dark pl-0 pr-0">
      <div class="container-fluid brand">
        <p class="navbar-brand text-white pl-1" style={{ display: "none" }}>
          <img
            alt="Ryan Griffiths"
            class="img-fluid rounded-circle img-brand"
            src={HeaderImg}
          />{" "}
          Ryan Griffiths
        </p>

        <button
          class="navbar-toggler ml-auto rounded-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
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
