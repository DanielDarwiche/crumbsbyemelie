import Menu from "./Menu";
const Header=():JSX.Element=> {
  return (
      <div className="header">
      <p className="headertext">Crumbs
        <br/>by<br/>Emelie</p>
      <a href="https://www.instagram.com/crumbsbyemelie/" aria-label="Följ oss på Instagram"><i className="fa-brands fa-instagram"></i></a>
        <Menu />
      </div>
  );
};

export default Header;