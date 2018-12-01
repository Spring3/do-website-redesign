import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Plate.scss';

class Plate extends PureComponent {

  onClick = () => {
    const { select, index } = this.props;
    if (select) {
      select(index);
    }
  }

  render() {
    const { header, icon, children, active } = this.props;
    const plateClass = classnames('plate', {
      'plate-active': active === true
    });

    return (
      <div
        className={plateClass}
        onClick={this.onClick}
      >
        { !active
          ? (
            <div className="plate-info">
              <div
                className="plate-icon">
                { icon }
              </div>
              <p
                className="plate-header"
              >
                {header}
              </p>
            </div>
          )
          : (
            <div
              className="plate-content">
              { children }
            </div>
          )
        }
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
