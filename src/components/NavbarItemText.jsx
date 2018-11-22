// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NavbarItem.scss';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

class NavbarItemText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }
  mouseEnter = () => {
    this.setState({ hovering: true });
  }

  mouseLeave = () => {
    this.setState({ hovering: false });
  }

  renderPlainText(classname) {
    const { text } = this.props;
    return (
      <div
        className="navbar-item-wrapper"
      >
        <li
          className={classname}
        >
          { text }
        </li>
      </div>
    );
  }

  renderTextWithDropdown(classname, options) {
    const { text } = this.props;
    const { hovering } = this.state;
    return (
      <div
        className="navbar-item-wrapper"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <li
          className={classname}
        >
          {text}
          {options && options.length && (<ChevronDownIcon/>)}
        </li>
        {options && options.length && hovering && (
          <ul
            className='navbar-item-dropdown'
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            {options.map((option, key) => (
              <li
                key={key}
                className='navbar-item-dropdown-option'
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  render () {
    const { active, options} = this.props;

    const classname = classnames('navbar-item navbar-item-text', {
      'navbar-item-active': active === true
    })

    return (options && options.length)
      ? this.renderTextWithDropdown(classname, options)
      : this.renderPlainText(classname);
  }
}

NavbarItemText.propTypes = {
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  active: PropTypes.bool,
  text: PropTypes.string,
  options: PropTypes.array
}

NavbarItemText.defaultProps = {
  options: []
}

export default NavbarItemText;
