import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iphone6 from '../img/iphone_6_gold.png';

import './IPhoneFrame.scss';

const imageStyle = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundImage: `url(${iphone6})`
};

class IPhoneFrame extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className="iphone-frame"
        style={imageStyle}
      >
        { children }
      </div>
    );
  }
};

IPhoneFrame.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default IPhoneFrame;
