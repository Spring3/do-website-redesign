// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    }
  }

  activate = (i : Number) => {
    if (this.state.index !== i) {
      this.setState({
        activeIndex: i
      });
    }
  }

  render() {
    const { children = [] } = this.props;
    const { activeIndex } = this.state;
    return (
      <ul className="slider">
        { 
          React.Children.map(children, (child, i) =>
            React.cloneElement(child, {
              index: i,
              activate: this.activate,
              active: activeIndex === i
            })
          )
        }
      </ul>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.node
};

export default Slider;
