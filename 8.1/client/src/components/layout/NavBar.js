import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header class='main-header'>
      <nav class='main-header__nav'>
        <ul class='main-header__item-list'>
          <li class='main-header__item'>
            <NavLink
              to='/'
              className={navData => (navData.isActive ? 'active' : '')}
            >
              Shop
            </NavLink>
          </li>
          <li class='main-header__item'>
            <NavLink
              to='/products'
              className={navData => (navData.isActive ? 'active' : '')}
            >
              Product
            </NavLink>
          </li>
          <li class='main-header__item'>
            <a href='/'>Cart</a>
          </li>
          <li class='main-header__item'>
            <a href='/'>Orders</a>
          </li>
          <li class='main-header__item'>
            <NavLink
              to='/add-product'
              className={navData => (navData.isActive ? 'active' : '')}
            >
              Add Product
            </NavLink>
          </li>
          <li class='main-header__item'>
            <a href='/'>Admin Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
