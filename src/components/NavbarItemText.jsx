// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NavbarItem.scss';
import { ChevronDownIcon } from 'mdi-react';

const NavbarItemText = props => {
  const { active, text, onClick, index, options } = props;
  const classname = classnames('navbar-item navbar-item-text', {
    'navbar-item-active': active === true
  });

  const clickHandler = (e : SyntheticEvent<HTMLLIElement>) => {
    e.preventDefault();
    onClick(index);
  }

  return (
    <div className="navbar-item-wrapper">
      <li
        className={classname}
        onClick={clickHandler}
      >
        {text}
        <ChevronDownIcon/>
      </li>
      <ul
        className='navbar-item-dropdown'
      >
        {options.map((option, key) => (
          <li
            key={key}
            className='navbar-item-dropdown-option'
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

NavbarItemText.propTypes = {
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  active: PropTypes.bool,
  text: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func
}

NavbarItemText.defaultProps = {
  options: []
}

export default NavbarItemText;
