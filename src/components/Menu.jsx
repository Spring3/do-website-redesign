import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Menu.scss';

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex || -1
    };
  }

  select = (index) => {
    this.setState({
      selectedIndex: index
    });
  }

  render () {
    const { options, children, className } = this.props;
    return (
      <div className={className}>
        <div
          className="menu"
        >
          <ul>
            {
              options.map((option, i) =>
                <li
                  className={classnames({
                    'selected': this.state.selectedIndex === i
                  })}
                  key={i}
                  onClick={this.select.bind(this, i)}>
                  {option}
                </li>
              )
            }
          </ul>
        </div>
        <div
          className="menu-options"
        >
          {
            React.Children.map(children, (child, i) =>
              React.cloneElement(child, {
                className: classnames(child.props.className, {
                  'menu-selected': i === this.state.selectedIndex
                })
              })
            )
          }
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
  selectedIndex: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Menu;
