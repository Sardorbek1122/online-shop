import './Navbar.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bulma';

export const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__links">
          <NavLink
            to="/"
            className="navbar__link"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="navbar__link"
          >
            About
          </NavLink>

          <NavLink
            to="/store"
            className="navbar__link"
          >
            Store
          </NavLink>
        </div>
        <div>
          <button
            type="submit"
            className="navbar__btn"
          >
            SVG
          </button>
          <div className="navbar__item-counter">
            3
          </div>
        </div>

      </nav>
    </div>
  );
};
