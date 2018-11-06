// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NavbarItem.scss';

import Image from './Image.jsx';

const NavbarItemImage = props => {
  const { grow, src, alt, width, height } = props;
  const classname = classnames('navbar-item', {
    'navbar-item-grow': grow === true
  });

  return (
    <li
      className={classname}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </li>
  );
}


NavbarItemImage.propTypes = {
  grow: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default NavbarItemImage;
