import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Plate.scss';

class Plate extends PureComponent {

  onClick = () => {
    const { select, index } = this.props;
    console.log('Clicked ', index);
    if (select) {
      select(index);
    }
  }

  render() {
    const { header, icon, children, active } = this.props;
    const classname = classnames('plate', {
      'plate-active': active === true
    });

    return (
      <div
        className={classname}
        onClick={this.onClick}
      >
        <div className="plate-info">
          <span
            className="plate-header"
          >
            {header}
          </span>
          <div
            className="plate-icon">
            { icon }
          </div>
        </div>
        <div
          className="plate-content">
          { children }
        </div>
      </div>
    );
  }
}

Plate.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  select: PropTypes.func,
  index: PropTypes.number,
  active: PropTypes.bool
};

export default Plate;
