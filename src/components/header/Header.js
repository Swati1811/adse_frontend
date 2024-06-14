import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img alt="Pidilite Logo" className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nameContainer">
        <h3>Auto Digital Specification Enablement Software</h3>
      </div>
    </div>
  );
};

export default Header;
