import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo_dial-once_180.png';

import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';
import Group from '../components/Group';

class Landing extends PureComponent {
  render() {
    return (
      <Navbar className="navbar-x navbar-end">
        <NavbarItem type="image" src={logo} width={150} grow={true}/>
        <Group>
          <NavbarItem text="Solutions" />
          <NavbarItem text="Benefits" />
          <NavbarItem text="References" />
          <NavbarItem text="Company" />
        </Group>
      </Navbar>
    );
  }
}

export default Landing;
