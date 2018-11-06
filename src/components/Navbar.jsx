// @flow

import React, { Component } from 'react';
import './Navbar.css';

import PropTypes from 'prop-types';
import classnames from 'classnames';

const Navbar = props => {
  const { children, className } = props;
  const classname = classnames('navbar', className);

  return (
    <ul
      className={classname}
    >
      { children }
    </ul>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node  
};

Navbar.defaultProps = {
  children: []
};

export default Navbar;
