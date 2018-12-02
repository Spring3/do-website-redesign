import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class ImageSlide extends PureComponent {
  render() {
    const { children, active } = this.props;
    const slideClass = classnames('image-slide', {
      'image-slide-active': active === true
    });

    return (
      <li className={slideClass}>
        {children}
      </li>
    );
  }
}

ImageSlide.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node
};

ImageSlide.defaultProps = {
  active: false
};

export default ImageSlide;
