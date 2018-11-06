import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  const { src, alt, width, height } = props;
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

Image.propTypes = {
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

export default Image;
