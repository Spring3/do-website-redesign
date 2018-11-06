// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Group.css';

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: undefined
    };
  }

  clickHandler = (index : Number) => {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    const { children, className } = this.props;
    const classname = classnames('group', className);

    return (
      <div
        className={classname}
      >
        { 
          React.Children.map(children, (child, i) =>
            React.cloneElement(child, {
              index: i,
              onClick: this.clickHandler
            })
          )
        }
      </div>
    );
  }
}

Group.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Group;
