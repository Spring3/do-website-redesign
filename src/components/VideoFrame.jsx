import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Video from './Video.jsx';

import './VideoFrame.scss';

const imageStyleTemplate = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center'
};

class VideoFrame extends PureComponent {
  render() {
    const { img } = this.props;
    const urlToImg = `url(${img})`;
    return (
      <div
        className="video-frame"
        style={{ backgroundImage: urlToImg, ...imageStyleTemplate}}
      >
        <Video />
      </div>
    );
  }
};

VideoFrame.propTypes = {
  img: PropTypes.string.isRequired
}

export default VideoFrame;
