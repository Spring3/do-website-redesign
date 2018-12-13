// @flow

import React, { PureComponent } from 'react';
import '../styles/Navbar.scss';

import PropTypes from 'prop-types';
import classnames from 'classnames';

class Navbar extends PureComponent {
  render () {
    const { children, className } = this.props;
    const classname = classnames('navbar', className);

    return (
      <ul
        className={classname}
      >
        { children }
      </ul>
    );
  }
}

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node  
};

Navbar.defaultProps = {
  children: []
};

export default Navbar;
