import HeaderImage from "../HeaderImage/HeaderImage";
import "./Header.css";

const Header = () => {
  return (
    <div className="heading container-fluid">
      <div className="row">
        <div className="d-inline col-2 col-sm-1 bg-blue"></div>
        <div className="d-none d-sm-inline col-1 bg-orange"></div>

        <div className="col-8">
          <div className="row">
            <HeaderImage />
            <div className="col-sm">
              <div className="title text-center text-sm-left">
                <h1>Ryan Griffiths</h1>
              </div>
              <div className="text-center text-sm-left">
                <h2>Design/Develop</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="d-inline col-2 col-sm-1 bg-orange"></div>
        <div className="d-none d-sm-inline col-1 bg-blue"></div>
      </div>
    </div>
  );
};

export default Header;
