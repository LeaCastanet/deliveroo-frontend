import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <img src={logo}></img>
        <h1>deliveroo</h1>
      </div>
    </div>
  );
};

export default Header;
