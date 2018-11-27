import React, { PureComponent, Fragment } from 'react';
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
    return (
    <Fragment>
      <Navbar key={0} className="navbar-x">
        <NavbarItem type="image" src={logo} width={150} grow={true}/>
        <Group selectable={false}>
          <NavbarItem text="Solutions" />
          <NavbarItem text="Benefits" options={BenefitsOptions} />
          <NavbarItem text="References" options={ReferencesOptions} />
          <NavbarItem text="Company" options={CompanyOptions} />
        </Group>
      </Navbar>
      <main key={1}>
        <section className="showcase">
          <VideoFrame
            img={iphone6}
          >
            <Video
              src='do-demo.mp4'
              autoplay={true}
              loop={true}
              preload='auto'
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
          <Group
            className="plates-menu"
            selectable={true}
          >
            <Plate
              header="Personalized solution"
              icon={<DiamondOutlineIcon size={30}/>}
            >
              <p>Our team will make sure your new visual IVR respects your company's design choices. We will take into account all your expectations and suggestions as well as any mockups that you provide.</p>
            </Plate>
            <Plate
              header="Plug & Play"
              icon={<ControllerClassicOutlineIcon size={25}/>}              
            >
              <p>To start using the visual IVR solutions, you just need to connect your website or app to our api and let all the rest of it be done by our expects remotely. To stop the use, just do the opposite. It's that simple!</p>
            </Plate>
            <Plate
              header="Multi device support"
              icon={<CellphoneLinkIcon size={25}/>}
            >
              <p>Visual IVR is configurable on all of the popular information channels - mobile, SMS, web and even offline. We support the most popular platforms and solutions.</p>
            </Plate>
            <Plate
              header="Reduced amount of calls"
              icon={<CoinIcon size={25}/>}
            >
              <p>Visual IVR solution satisfies most of the needs of your users, because it's short, simple and informative. Hence, in most cases, they won't have the need to contact your call center and that's. To use the visual IVR is a winning choice for your company.</p>
            </Plate>
            <Plate
              header="24/7 Self service"
              icon={<AccountSearchOutlineIcon size={25}/>}
            >
              <p>Your support center might have a finite work day, while the visual IVR works all the time. It provides answer to most of the cases your users might have while your consultants are offline.</p>
            </Plate>
            <Plate
              header="Instant user feedback"
              icon={<AccountGroupOutlineIcon size={25}/>}
            >
              <p>At the end of each session with the visual IVR, the users see a page where they can provide instant feedback as well as rate their new experience. Having this data, you can analyse it and improve your services.</p>
            </Plate>
            <Plate
              header="Access to dashboard"
              icon={<MonitorDashboardIcon size={25}/>}
            >
              <p>Our dashboard provides metrics and kpis that display the real-time usage of our solution by different information channels. Use it to follow the history and evaluate the effectivity of the visual IVR.</p>
            </Plate>
            <Plate
              header="Run-time analytics"
              icon={<ChartBarStackedIcon size={25}/>}
            >
              <p>We route you the real-time anonymous usage data that we collect from the information channels that you installed.</p>
            </Plate>
            <Plate
              header="Contextualized call"
              icon={<AccountCardDetailsIcon size={25}/>}
            >
              <p>In case a user can't find the answer to the question they have, the visual IVR provides an option to continue the call to your center. In such case, we provide some context along with the call. This information helps your consultants to identify the caller and jump right into adressing the user's case.</p>
            </Plate>
            <Plate
              header="On demand (de)activation"
              icon={<ToggleSwitchOutlineIcon size={25}/>}
            >
              <p>You can deactivate any of the installed solutions any time on any channel or platform using your dashboard access. Just switch the toggle and it's done!</p>
            </Plate>
          </Group>
        </section>
      </main>
    </Fragment>
    );
  }
}

export default Landing;
