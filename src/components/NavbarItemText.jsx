// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NavbarItem.scss';
import { ChevronDownIcon } from 'mdi-react';

const NavbarItemText = props => {
  const { active, text, onClick, index } = props;
  const classname = classnames('navbar-item navbar-item-text', {
    'navbar-item-active': active === true
  });

  const clickHandler = (e : SyntheticEvent<HTMLLIElement>) => {
    e.preventDefault();
    onClick(index);
  }

  return (
    <li
      className={classname}
      onClick={clickHandler}
    >
      {text}
      <ChevronDownIcon/>
    </li>
  );
}

NavbarItemText.propTypes = {
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  active: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default NavbarItemText;
