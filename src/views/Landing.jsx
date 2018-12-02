import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo_dial-once_180.png';
import iphone6 from '../img/iphone_6_gold.png';
import dashboardChart from '../img/dashboard-chart.png';
import dashboardKpis from '../img/dashboard-kpis.png';

import Navbar from '../components/Navbar';
import NavbarItem from '../components/NavbarItem';
import Group from '../components/Group';
import IPhoneFrame from '../components/IPhoneFrame';
import Video from '../components/Video';
import Slider from '../components/Slider';
import Slide from '../components/Slide';
import ImageSlide from '../components/ImageSlide';
import Plate from '../components/Plate';
import Menu from '../components/Menu';

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
      <Navbar className="navbar-x">
        <NavbarItem type="image" src={logo} width={150} grow={true}/>
        <Group
          selectable={false}
        >
          <NavbarItem text="Solutions" />
          <NavbarItem text="Benefits" options={BenefitsOptions} />
          <NavbarItem text="References" options={ReferencesOptions} />
          <NavbarItem text="Company" options={CompanyOptions} />
        </Group>
      </Navbar>
      <main>
        <section className="showcase">
          <IPhoneFrame>
            <Video
              src='do-demo.mp4'
              autoplay={true}
              loop={true}
              preload='auto'
            />
          </IPhoneFrame>
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
            deselectable={true}
          >
            <Plate
              header="Personalized solution"
              icon={<DiamondOutlineIcon size={35}/>}
            >
              <p>Our team will make sure your new visual IVR respects your company's design choices. We will take into account all your expectations and suggestions as well as any mockups that you provide.</p>
            </Plate>
            <Plate
              header="Plug & Play"
              icon={<ControllerClassicOutlineIcon size={35}/>}              
            >
              <p>To start using the visual IVR solutions, connect your website or app to our api and let all the rest of it be done by our expects remotely. To stop the use, just do the opposite. It's that simple!</p>
            </Plate>
            <Plate
              header="Multi device support"
              icon={<CellphoneLinkIcon size={35}/>}
            >
              <p>Visual IVR is configurable on all of the popular information channels - mobile, SMS, web and even offline. We support the most popular platforms and solutions.</p>
            </Plate>
            <Plate
              header="Reduced amount of calls"
              icon={<CoinIcon size={35}/>}
            >
              <p>Visual IVR solution is short, simple and informative. Hence, in most cases the users won't have to contact your call center. Visual IVR is a winning choice for your company.</p>
            </Plate>
            <Plate
              header="24/7 Self service"
              icon={<AccountSearchOutlineIcon size={35}/>}
            >
              <p>Your support center might have a fixed work day, while the visual IVR works all the time. It provides answers to most of the common problems while your consultants are offline.</p>
            </Plate>
            <Plate
              header="Instant user feedback"
              icon={<AccountGroupOutlineIcon size={35}/>}
            >
              <p>At the end of each session with the visual IVR, the users can provide instant feedback and rate their experience. With this data, you can analyse it and improve your services.</p>
            </Plate>
            <Plate
              header="Access to dashboard"
              icon={<MonitorDashboardIcon size={35}/>}
            >
              <p>Our dashboard provides metrics and kpis of real-time usage of our solutions for each information channel. Keep track of it and evaluate the effectiveness of the visual IVR.</p>
            </Plate>
            <Plate
              header="Run-time analytics"
              icon={<ChartBarStackedIcon size={35}/>}
            >
              <p>We route you the real-time anonymous usage data that we collect from your connected information channels.</p>
            </Plate>
            <Plate
              header="Contextualized call"
              icon={<AccountCardDetailsIcon size={35}/>}
            >
              <p>If a user can't find the answer to their problem, they can continue the call to your support center. Additionally, we will provide context metadata, that will help your support to identify the caller and faster adress your user's case.</p>
            </Plate>
            <Plate
              header="On demand (de)activation"
              icon={<ToggleSwitchOutlineIcon size={35}/>}
            >
              <p>You can deactivate any of the installed solutions any time on any channel or platform using your dashboard access. Just switch the toggle and it's done!</p>
            </Plate>
          </Group>
        </section>
        <section>
          <h1>Dial-Once Solutions</h1>
          <Menu
            className="solutions"
            options={['Click to Hub', 'SMS to Hub', 'Call to Hub', 'Offline Mode', 'Context Transfer', 'My Hub']}
          >
            <div className="solution">
              <aside>
                <Slider>
                  <ImageSlide>
                    <IPhoneFrame>
                      <img src="click2hub1.png" rel='click2hub'/>
                    </IPhoneFrame>
                  </ImageSlide>
                  <ImageSlide>
                    <IPhoneFrame>
                      <img src="click2hub.png" rel='click2hub'/>
                    </IPhoneFrame>
                  </ImageSlide>
                </Slider>
              </aside>
              <div>
                <p className="caption">Configure items on the page to trigger the visual IVR</p>
                <ul className="benefits">
                  <li>Widget-like view</li>
                  <li>Remote implicit configuration.</li>
                  <li>24/7 access</li>
                  <li>Reduced amount of calls</li>
                  <li>User self-service</li>
                  <li>User satisfaction measurement</li>
                </ul>
              </div>
            </div>
            <div className="solution">
              <aside>
                <IPhoneFrame>
                  <img src='sms2hub.png' rel='sms2hub'/>
                </IPhoneFrame>
              </aside>
              <div>
                <p className="caption">Trigger the visual IVR from SMS</p>
                <ul className="benefits">
                  <li>No delays or waiting time</li>
                  <li>24/7 access</li>
                  <li>Less amount of calls to your customer support</li>
                  <li>User self-service</li>
                </ul>
              </div>
            </div>
            <div className="solution">
              <aside>
                <Slider>
                  <ImageSlide>
                    <IPhoneFrame>
                      <img src="call2hub.png" rel='call2hub'/>
                    </IPhoneFrame>
                  </ImageSlide>
                  <ImageSlide>
                    <IPhoneFrame>
                      <img src="click2hub.png" rel='call2hub'/>
                    </IPhoneFrame>
                  </ImageSlide>
                </Slider>
              </aside>
              <div>
                <p className="caption">Intercept the call and trigger the visual IVR instead.</p>
                <ul className="benefits">
                  <li>Reduce the amount of sessions with your customer support</li>
                  <li>User self-service</li>
                  <li>User satisfaction measurement</li>
                </ul>
              </div>
            </div>
            <div className="solution">
              <div>
                <p className="caption">Get access to the visual IVR while offline.</p>
                <ul>
                  <li>Unlimited access</li>
                  <li>Fast synchronization once online</li>
                  <li>Reduced amount of calls</li>
                  <li>User self-service</li>
                </ul>
              </div>
            </div>
            <div className="solution">
              <div>
                <p className="caption">Send user metadata to your support center to provide basic info about the call.</p>
                <ul className="benefits">
                  <li>More accurate customer case review</li>
                  <li>Reduced call time</li>
                  <li>Increased users / hour rate</li>
                  <li>Better quality of user service</li>
                </ul>
              </div>
            </div>
            <div className="solution">
              <div>
                <p className="caption">Let you caller trigger the visual IVR if you are in busy / sleep mode.</p>
                <ul>
                  <li>User self-service</li>
                  <li>Reduced amount of calls</li>
                </ul>
              </div>
            </div>
          </Menu>
        </section>
        <section className="feedback">
          <h1>Feedback</h1>
          <ul>
            <li>
              <p>The customer Care function has to field over 50 million inbound customer care calls every year. We serve everyone in France and wanted to show our customers that we are the most innovative postal service in Europe today. Dial-once are at the forefront of eCare and when we asked, they delivered.</p>
              <div>
                <span>Raphaël Colas, La Poste</span>
              </div>
            </li>
            <li>
              <p>We are convinced that this solution improves customer experience on historical telephony channel, even if it is growing fast due to extended or illimited offers in telecommunications. Congrats for this innovation!</p>
              <div>
                <span>Joanny Husson , Norauto</span>
              </div>
            </li>
            <li>
              <p>Dial Once is the digital solution missing in the link between digital eco-system and calls. Their approach is unique: they are 100% focused on the customer and that is why we decided to integrate Dial Once in our offers.</p>
              <div>
                <span>Dorothée Dalaine, The Social Client / Acticall-SITEL</span>
              </div>
            </li>
            <li>
              <p>Effective is the word that comes to my mind when I think of the Dial Once project. Always available, they accompanied us in the implementation of the solution by taking into account our specificities. Strength of proposals, they knew how to make us benefit during the project phase from their last technological evolutions. They were proactive and agile throughout the project.</p>
              <div>
                <span>Luc Rondot, Crédit Foncier</span>
              </div>
            </li>
            <li>
              <p>Dial Once provides an unique solution which helps City Hall of Paris to handle inbound calls. Behind their innovative solution, Dial Once is also strong by its capacity to provide consulting approach, which is very useful during the project.</p>
              <div>
                <span>Richard Le François, Mairie de Paris</span>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h1>Our customers</h1>
        </section>
      </main>
      <footer>
      </footer>
    </Fragment>
    );
  }
}

export default Landing;
