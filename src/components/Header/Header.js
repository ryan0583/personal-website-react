import HeaderImage from "../HeaderImage/HeaderImage";
import "./Header.css";

const Header = () => {
  return (
    <div id="home" class="heading container-fluid">
      <div class="row">
        <div class="d-inline col-2 col-sm-1 bg-blue"></div>
        <div class="d-none d-sm-inline col-1 bg-orange"></div>

        <div class="col-8">
          <div class="row">
            <HeaderImage />
            <div class="col-sm">
              <div class="title text-center text-sm-left">
                <h1>Ryan Griffiths</h1>
              </div>
              <div class="text-center text-sm-left">
                <h2>Design/Develop</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="d-inline col-2 col-sm-1 bg-orange"></div>
        <div class="d-none d-sm-inline col-1 bg-blue"></div>
      </div>
    </div>
  );
};

export default Header;
