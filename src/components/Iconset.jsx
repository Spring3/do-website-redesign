import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Iconset.scss';

class Iconset extends Component {
  render () {
    const { iconsets, width, height } = this.props;
    return (
      <div className="iconset-wrapper">
        {
          iconsets.map(({ url, name, type }) => (
            <div className="iconset-item">
              <img src={url} alt={name} width={width} height={height}/>
            </div>
          ))
        }
      </div>
    );
  }
};

Iconset.propTypes = {
  iconsets: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
};

export default Iconset;
