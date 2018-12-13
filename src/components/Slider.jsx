// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../styles/Slider.scss';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      manual: this.props.manual || false
    };
  }

  componentDidMount() {
    const { manual } = this.state;
    const { children, speed, delay } = this.props;
    setTimeout(() => this.setState({
      activeIndex: 0
    }), delay);
    const itemsLength = children.length;
    if (itemsLength > 0 && !manual) {
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
  delay: PropTypes.number,
  manual: PropTypes.bool
};

Slider.defaultProps = {
  speed: 5000,
  delay: 1500,
  manual: false
};

export default Slider;
