import HeaderImg from "../../img/Header.png";
import "./HeaderImage.css";

const HeaderImage = () => (
  <div className="col-sm img-container">
    <img
      alt="Ryan Griffiths"
      className="img-fluid rounded-circle img-header mt-2 mb-2"
      src={HeaderImg}
    />
  </div>
);

export default HeaderImage;
