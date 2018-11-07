import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  render() {
    const { src, alt, width, height } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    );
  }
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
