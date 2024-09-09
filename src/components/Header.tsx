import { NavLink } from 'react-router-dom';
import Menu from "./Menu";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <NavLink to="/" className="headertext">
        Crumbs<br/>by<br/>Emelie
      </NavLink>
      <a href="https://www.instagram.com/crumbsbyemelie/" aria-label="Följ oss på Instagram">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <Menu />
    </div>
  );
};

export default Header;