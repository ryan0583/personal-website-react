import "./NavLink.css";

const NavLink = ({ href, linkText }) => {
  return (
    <li class="nav-item">
      <a
        class="nav-link text-white pr-2 d-flex justify-content-end"
        href={href}
      >
        {linkText}
      </a>
    </li>
  );
};

export default NavLink;
