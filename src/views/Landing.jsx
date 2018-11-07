import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo_dial-once_180.png';

import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';
import Group from '../components/Group';

/* move it further to some separate place (store?) */
const SolutionsOptions = [
  { name: 'Visual IVR', location: '/solutions/visual-ivr' },
  { name: 'Omnichannel Platform', location: '/solutions/omnichannel-platform' },
  { name: 'Analytics and Reporting', location: '/solutions/analytics-and-reporting' }
];

const BenefitsOptions = [
  { name: 'Customer Experience', location: '/benefits/customer-experience' },
  { name: 'Digital Transformation', location: '/benefits/digital-transformation' },
  { name: 'Call Deflection', location: '/benefits/call-deflections' },
  { name: 'Customer Journey', location: '/benefits/customer-journey' }
];

const ReferencesOptions = [
  { name: 'Clients', location: '/references/clients' },
  { name: 'Partners', location: '/references/partners' }
];

const CompanyOptions = [
  { name: 'About', location: '/company/about' },
  { name: 'Dial-Once Team', location: '/company/dialonce-team' },
  { name: 'Governance', location: '/company/governance' },
  { name: 'Press corner', location: '/company/press-corner' }
];

class Landing extends PureComponent {
  render() {
    return (
      <Navbar className="navbar-x">
        <NavbarItem type="image" src={logo} width={150} grow={true}/>
        <Group selectable={false}>
          <NavbarItem text="Solutions" options={SolutionsOptions} />
          <NavbarItem text="Benefits" options={BenefitsOptions} />
          <NavbarItem text="References" options={ReferencesOptions} />
          <NavbarItem text="Company" options={CompanyOptions} />
        </Group>
      </Navbar>
    );
  }
}

export default Landing;
