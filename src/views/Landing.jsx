import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo_dial-once_180.png';
import iphonex from '../img/iphonex.png';

import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';
import Group from '../components/Group';
import VideoFrame from '../components/VideoFrame';
import Slider from '../components/Slider';
import Slide from '../components/Slide';

import {
  AndroidIcon,
  AppleIosIcon,
  XamarinOutlineIcon,
  CordovaIcon,
  WebIcon,
  FacebookMessengerIcon,
  EmailIcon,
  QrcodeIcon,
  PhoneInTalkIcon
} from 'mdi-react';

import './Landing.css';

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
    return [
      <Navbar key={0} className="navbar-x">
        <NavbarItem type="image" src={logo} width={150} grow={true}/>
        <Group selectable={false}>
          <NavbarItem text="Solutions" options={SolutionsOptions} />
          <NavbarItem text="Benefits" options={BenefitsOptions} />
          <NavbarItem text="References" options={ReferencesOptions} />
          <NavbarItem text="Company" options={CompanyOptions} />
        </Group>
      </Navbar>,
      <main key={1}>
        <section className="showcase">
          <VideoFrame
            img={iphonex}
          />
          <Slider>
            <Slide
              header="Visual IVR"
            >
              <span>Personalized and fully customizable</span>
              <span>User satisfaction rate measurement</span>
              <span>Follows your company's working hours</span>
              <span>Contextualizes the call</span>
              <span>Plug & Play</span>
            </Slide>
            <Slide
              header="Multiple information channels"
              column={true}
            >
              <span><PhoneInTalkIcon /> - Phone call</span>
              <span><AndroidIcon /> - Android</span>
              <span><AppleIosIcon /> - iOS</span>
              <span><XamarinOutlineIcon /> - Xamarin</span>
              <span><CordovaIcon /> - Cordova</span>
              <span><WebIcon /> - Website</span>
              <span><FacebookMessengerIcon /> - Facebook Messenger</span>
              <span><EmailIcon /> - Email</span>
              <span><QrcodeIcon /> - QR code</span>
            </Slide>
            <Slide
              header="Analytics & Reporting"
            >
              <span>Real-time analytics</span>
              <span>Access to Dashboard</span>
              <span>On demand (de)activation</span>
              <span>User interaction tracking</span>
              <span>Consultation about the main KPIs</span>
            </Slide>
          </Slider>
        </section>
      </main>
    ];
  }
}

export default Landing;
