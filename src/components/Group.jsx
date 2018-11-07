// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Group.css';

class Group extends PureComponent {
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
    const { children, className, selectable } = this.props;
    const classname = classnames('group', className);

    return (
      <div
        className={classname}
      >
        { 
          selectable ? (
            React.Children.map(children, (child, i) =>
              React.cloneElement(child, {
                index: i,
                onClick: this.clickHandler
              })
            )
          )
          : children
        }
      </div>
    );
  }
}

Group.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  selectable: PropTypes.bool
};

Group.defaultProps = {
  selectable: false
};

export default Group;
