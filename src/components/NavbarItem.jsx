// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NavbarItem.scss';

import NavbarItemText from './NavbarItemText.jsx';
import NavbarItemImage from './NavbarItemImage.jsx';

class NavbarItem extends PureComponent {
  render () {
    const { active, text, index, type, src, width, height, alt, options } = this.props;

    switch(type.toLowerCase()) {
      case 'image':
        return (
          <NavbarItemImage
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
            index={index}
            active={active}
            options={options}
          />
        );
    }
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
  options: PropTypes.array
};

NavbarItem.defaultProps = {
  type: 'text'
};

export {
  NavbarItemImage,
  NavbarItemText
};
export default NavbarItem;
