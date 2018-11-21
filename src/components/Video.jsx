import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Video extends PureComponent {
  render () {
    const {
      width,
      height,
      src,
      type,
      autoplay,
      loop,
      preload } = this.props;
    return (
      <video
        width={width}
        height={height}
        autoPlay={autoplay}
        loop={loop}
        preload={preload}
      >
        <source
          src={src}
          type={type}
        />
        Your browser does not support html5 video
      </video>
    );
  }
}

Video.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  preload: PropTypes.oneOf([
    'auto',
    'metadata',
    'none'
  ]),
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'video/mp4',
    'video/webm',
    'video/ogg'
  ])
};

Video.defaultProps = {
  type: 'video/mp4',
  autoplay: false,
  loop: false,
  preload: 'none'
};

export default Video;
