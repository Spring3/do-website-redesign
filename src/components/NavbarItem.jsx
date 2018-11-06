// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './NavbarItem.scss';

import NavbarItemText from './NavbarItemText.jsx';
import NavbarItemImage from './NavbarItemImage.jsx';

const NavbarItem = props => {
  const { active, text, onClick, index, type, grow, src, width, height, alt } = props;

  switch(type.toLowerCase()) {
    case 'image':
      return (
        <NavbarItemImage
          grow={grow}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      );
    default:
      return (
        <NavbarItemText
          text={text}
          onClick={onClick}
          index={index}
          active={active}
        />
      );
  }
}

NavbarItem.propTypes = {
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  type: PropTypes.oneOf([
    'image',
    'text'
  ]).isRequired,
  active: PropTypes.bool,
  grow: PropTypes.bool,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func
};

NavbarItem.defaultProps = {
  type: 'text'
};

export {
  NavbarItemImage,
  NavbarItemText
};
export default NavbarItem;
