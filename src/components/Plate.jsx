import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Plate.scss';

class Plate extends PureComponent {
  render() {
    const { header, icon } = this.props;
    return (
      <div className="plate">
        <span className="plate-header">{header}</span>
        <div>
          { icon }
        </div>
      </div>
    );
  }
}

Plate.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.element
};

export default Plate;
