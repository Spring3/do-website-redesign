// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../styles/Group.scss';

class Group extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: undefined
    };
  }

  clickHandler = (index : Number) => {
    const { deselectable } = this.props;
    const { activeIndex } = this.state;

    const nextIndex = deselectable && activeIndex === index
      ? undefined
      : index;
    this.setState({
      activeIndex: nextIndex
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
                select: this.clickHandler,
                active: this.state.activeIndex === i
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
  selectable: PropTypes.bool,
  deselectable: PropTypes.bool
};

Group.defaultProps = {
  selectable: false,
  deselectable: false
};

export default Group;
