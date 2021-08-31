import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import './Menu.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PaymentIcon from '@material-ui/icons/Payment';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AppsIcon from '@material-ui/icons/Apps';
import RateReviewIcon from '@material-ui/icons/RateReview';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CommuteIcon from '@material-ui/icons/Commute';

const navigationlists = () => {
  return (
    <ul
      className="navigation"
    >  
      <li className="navigation__item navigation__item--mega">
        <Link to="/" className="navigation__link navigation__link--has-submenu">
        <FormattedMessage id="Navigation.Link.Orders" defaultMessage="Home" />
        <ExpandMoreIcon/>
        </Link>
        <div className="navigation__sub">
          <div className="navigation__sub-mega">
            <div className="navigation__sub-left">
              <div className="navigation__sub-content">
                <div className="navigation__sub-content-row">
                  <NavLink
                    activeClassName="is-active"
                    to="/get-started"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <DirectionsCarIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Payment" defaultMessage="Get started" /></p>
                      <p className="navigation__sub-desc">Rides that do the work for you</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/book-online"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <LibraryBooksIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.French" defaultMessage="Book online" />
                      </p>
                      <p className="navigation__sub-desc">Services you have with Shoferi</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/payment"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <PaymentIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.German" defaultMessage="Payment" />
                      </p>
                      <p className="navigation__sub-desc">Most responsible & reliable taxi service</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/app"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                      <AppsIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Italian" defaultMessage="App" />
                      </p>
                      <p className="navigation__sub-desc">Download Shoferi app now</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/story"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <RateReviewIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Russian" defaultMessage="Story" />
                      </p>
                      <p className="navigation__sub-desc">The only rewarding taxi app</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/services"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <EmojiTransportationIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Japanesse" defaultMessage="Services" />
                      </p>
                      <p className="navigation__sub-desc">Comfortable and affordable services</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>


      <li className="navigation__item">
        <NavLink to="/taxies" className="navigation__link items">
          <FormattedMessage id="nav-taxies" defaultMessage="About us"/>
        </NavLink>
      </li>
      
      
      <li className="navigation__item navigation__item--mega">
        <Link to="/locations" className="navigation__link navigation__link--has-submenu">
        <FormattedMessage id="Navigation.Link.Orders" defaultMessage="Solutions" />
        <ExpandMoreIcon/>
        </Link>
        <div className="navigation__sub">
          <div className="navigation__sub-mega">
            <div className="navigation__sub-left">
              <div className="navigation__sub-content">
                <div className="navigation__sub-content-row">
                  <NavLink
                    activeClassName="is-active"
                    to="/discover-location"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <LocationCityIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Payment" defaultMessage="Discover location" /></p>
                      <p className="navigation__sub-desc">Discover popular location</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/russian"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <PinDropIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.French" defaultMessage="First location" />
                      </p>
                      <p className="navigation__sub-desc">Select your location and driver</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/brasil"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <PersonPinIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.German" defaultMessage="Second location" />
                      </p>
                      <p className="navigation__sub-desc">Search distance for your taxi driver</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/frenchcourse"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                      <MyLocationIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Italian" defaultMessage="Third location" />
                      </p>
                      <p className="navigation__sub-desc">Search for your taxi driver</p>
                    </div>
                  </NavLink>
             
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="navigation__item">
        <NavLink to="/map" className="navigation__link items">
          <FormattedMessage id="nav-map" defaultMessage="Products"/>
        </NavLink>
      </li>


      <li className="navigation__item navigation__item--mega">
        <Link to="/drivers" className="navigation__link navigation__link--has-submenu">
        <FormattedMessage id="Navigation.Link.Orders" defaultMessage="Contact" />
        <ExpandMoreIcon/>
        </Link>
        <div className="navigation__sub">
          <div className="navigation__sub-mega">
            <div className="navigation__sub-left">
              <div className="navigation__sub-content">
                <div className="navigation__sub-content-row">
                  <NavLink
                    activeClassName="is-active"
                    to="/driver"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <DirectionsCarIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Payment" defaultMessage="Driver" /></p>
                      <p className="navigation__sub-desc">Apply to drive with Shoferi</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/russian"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <EmojiTransportationIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.French" defaultMessage="Driving with Shoferi" />
                      </p>
                      <p className="navigation__sub-desc">Drive toward what matters to you</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/brasil"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <MotorcycleIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.German" defaultMessage="Express drive" />
                      </p>
                      <p className="navigation__sub-desc">Express drive with Shoferi</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/frenchcourse"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                      <CommuteIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Italian" defaultMessage="Own boss" />
                      </p>
                      <p className="navigation__sub-desc">Start today driver</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/japanese"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <AssignmentIndIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Russian" defaultMessage="Signup bonusess" />
                      </p>
                      <p className="navigation__sub-desc">More you drive the bigger signup bonusess</p>
                    </div>
                  </NavLink>
                  <NavLink
                    activeClassName="is-active"
                    to="/swedish"
                    className="navigation__sub-item-box"
                  >
                    <div className="navigation__sub-box-icon">
                    <LibraryBooksIcon/>
                    </div>
                    <div className="navigation__sub-box-content">
                      <p className="navigation__sub-subtitle">
                        <FormattedMessage id="Menu.Link.Japanesse" defaultMessage="Book online" />
                      </p>
                      <p className="navigation__sub-desc">Book online and save</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>


      
    </ul>
  )
}


export default navigationlists;