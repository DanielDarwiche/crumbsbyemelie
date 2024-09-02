import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='menu-nav'>
      <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      {isMenuOpen && (
        <ul className='menu-nav-ul'>
          <li className='menu-nav-li'><NavLink to="/" onClick={closeMenu}>Hem</NavLink></li>
          <li className='menu-nav-li'><NavLink to="/galleri" onClick={closeMenu}>Galleri</NavLink></li>
          <li className='menu-nav-li'><NavLink to="/kontakt" onClick={closeMenu}>Kontakt</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;