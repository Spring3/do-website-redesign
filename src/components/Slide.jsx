import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import '../styles/Slide.scss';

class Slide extends PureComponent {
  activate = () => {
    const { activate, index } = this.props;
    if (activate) {
      activate(index);
    }
  }

  render() {
    const { header, index, children, active, column } = this.props;
    const slideClass = classnames('slide', {
      'slide-active': active === true
    });
    const slideDropDownClass = classnames('slide-dropdown', {
      'slide-dropdown-column': column
    });

    return (
      <li className={slideClass} style={{ animationDelay: `${index/1.6}s` }}>
        <h1
          className="slide-header"
          onClick={this.activate}
        >
          {header}
        </h1>
        <div className="slide-dropdown-wrapper">
          <ul className={slideDropDownClass}>
            { React.Children.map(children, (child, i) =>
                <li style={{ animationDelay: `${i * 0.1}s` }}>{child}</li>
              )
            }
          </ul>
        </div>
      </li>
    );
  }
}

Slide.propTypes = {
  header: PropTypes.string.isRequired,
  activate: PropTypes.func,
  index: PropTypes.number,
  active: PropTypes.bool,
  column: PropTypes.bool,
  children: PropTypes.node
};

Slide.defaultProps = {
  active: false
};

export default Slide;
