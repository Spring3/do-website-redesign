import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo_dial-once_180.png';
import iphone6 from '../img/iphone_6_gold.png';
import dashboardChart from '../img/dashboard-chart.png';
import dashboardKpis from '../img/dashboard-kpis.png';

import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';
import Group from '../components/Group';
import VideoFrame from '../components/VideoFrame';
import Video from '../components/Video';
import Slider from '../components/Slider';
import Slide from '../components/Slide';
import Plate from '../components/Plate';

import AndroidIcon from 'mdi-react/AndroidIcon';
import AppleIosIcon from 'mdi-react/AppleIosIcon';
import XamarinOutlineIcon from 'mdi-react/XamarinOutlineIcon';
import CordovaIcon from 'mdi-react/CordovaIcon';
import WebIcon from 'mdi-react/WebIcon';
import FacebookMessengerIcon from 'mdi-react/FacebookMessengerIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import QrcodeIcon from 'mdi-react/QrcodeIcon';
import PhoneInTalkIcon from 'mdi-react/PhoneInTalkIcon';
import DiamondOutlineIcon from 'mdi-react/DiamondOutlineIcon';
import ControllerClassicOutlineIcon from 'mdi-react/ControllerClassicOutlineIcon';
import CellphoneLinkIcon from 'mdi-react/CellphoneLinkIcon';
import CoinIcon from 'mdi-react/CoinIcon';
import AccountSearchOutlineIcon from 'mdi-react/AccountSearchOutlineIcon';
import AccountGroupOutlineIcon from 'mdi-react/AccountGroupOutlineIcon';
import MonitorDashboardIcon from 'mdi-react/MonitorDashboardIcon';
import ChartBarStackedIcon from 'mdi-react/ChartBarStackedIcon';
import AccountCardDetailsIcon from 'mdi-react/AccountCardDetailsIcon';
import ToggleSwitchOutlineIcon from 'mdi-react/ToggleSwitchOutlineIcon';

import './Landing.css';

/* move it further to some separate place (store?) */
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
          <NavbarItem text="Solutions" />
          <NavbarItem text="Benefits" options={BenefitsOptions} />
          <NavbarItem text="References" options={ReferencesOptions} />
          <NavbarItem text="Company" options={CompanyOptions} />
        </Group>
      </Navbar>,
      <main key={1}>
        <section className="showcase">
          <VideoFrame
            img={iphone6}
          >
            <Video
              src='do-demo.mp4'
              autoplay={true}
              loop={true}
            />
          </VideoFrame>
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
        <section>
          <h1>What you get with Dial-Once</h1>
          <div className="plates-menu">
            <Plate
              header="Personalized solution"
              icon={<DiamondOutlineIcon size={30}/>}
              iconClass="diamond"
            />
            <Plate
              header="Plug & Play"
              icon={<ControllerClassicOutlineIcon size={25}/>}
              iconClass="controller"
            />
            <Plate
              header="Multi device support"
              icon={<CellphoneLinkIcon size={25}/>}
              iconClass="cellphone"
            />
            <Plate
              header="Reduced amount of calls"
              icon={<CoinIcon size={25}/>}
              iconClass="calls"
            />
            <Plate
              header="24/7 Self service"
              icon={<AccountSearchOutlineIcon size={25}/>}
              iconClass="selfservice"
            />
            <Plate
              header="Instant user feedback"
              icon={<AccountGroupOutlineIcon size={25}/>}
              iconClass="feedback"
            />
            <Plate
              header="Access to dashboard"
              icon={<MonitorDashboardIcon size={25}/>}
              iconClass="dashboard"
            />
            <Plate
              header="Run-time analytics"
              icon={<ChartBarStackedIcon size={25}/>}
              iconClass="analytics"
            />
            <Plate
              header="Contextualized call"
              icon={<AccountCardDetailsIcon size={25}/>}
              iconClass="context"
            />
            <Plate
              header="On demand (de)activation"
              icon={<ToggleSwitchOutlineIcon size={25}/>}
              iconClass="toggle"
            />
          </div>
        </section>
      </main>
    ];
  }
}

export default Landing;
