import React from 'react';

import NavBar from './NavBar';

import '../css/main.css';
import '../css/forms.css';
import '../css/product.css';

const Layout = props => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
