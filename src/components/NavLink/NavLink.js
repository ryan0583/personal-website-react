import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavLink.css";

const NavLink = ({ href, linkText }) => {
  return (
    <li class="nav-item">
      <AnchorLink
        class="nav-link text-white pr-2 d-flex justify-content-end"
        href={href}
      >
        {linkText}
      </AnchorLink>
    </li>
  );
};

export default NavLink;
