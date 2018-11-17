// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      manual: false
    };
  }

  componentDidMount() {
    const { children, speed, delay } = this.props;
    setTimeout(() => this.setState({
      activeIndex: 0
    }), delay);
    const itemsLength = children.length;
    if (itemsLength > 0) {
      this.interval = setInterval(() => {
        const { activeIndex } = this.state;
        this.setState({
          activeIndex: activeIndex >= itemsLength - 1
            ? 0
            : activeIndex + 1
        });
      }, speed);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  activate = (i : Number) => {
    if (this.state.index !== i) {
      this.setState({
        activeIndex: i,
        manual: true
      });
      if (this.interval) {
        clearInterval(this.interval);
      }
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
  children: PropTypes.node,
  speed: PropTypes.number,
  delay: PropTypes.number
};

Slider.defaultProps = {
  speed: 5000,
  delay: 1500
};

export default Slider;
