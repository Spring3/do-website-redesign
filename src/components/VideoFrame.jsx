import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './VideoFrame.scss';

const imageStyleTemplate = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center'
};

class VideoFrame extends Component {
  render() {
    const { img, children } = this.props;
    const urlToImg = `url(${img})`;
    return (
      <div
        className="video-frame"
        style={{ backgroundImage: urlToImg, ...imageStyleTemplate}}
      >
        { children }
      </div>
    );
  }
};

VideoFrame.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default VideoFrame;
