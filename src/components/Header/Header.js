import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <nav className="header">
      <ul className="navLinks">
        <NavLink to="/" activeClassName="active">
          <li className="navLinkHome">Все котики</li>
        </NavLink>
        <NavLink to="favorites" activeClassName="active">
          <li className="navLinkFavorites">Любимые котики</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
