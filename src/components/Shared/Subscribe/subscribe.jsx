import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from "react-intl";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
const data =
    {
      title:<FormattedMessage id="subscribe.title" defaultMessage="Subscribe to our newsletter" />,
      description:<FormattedMessage id="subscribe.description" defaultMessage="Subscribe to our newsletter to get your weekly dose of content directly into your mailbox" />
    }

 
const Subscribe = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    },
      {
        disable: function () {
          var maxWidth = 800;
          return window.innerWidth < maxWidth;
        }
      });
  }, []);
  
    return (
      <div className="subscribe-wrapper">
          <div className="content">
              <div className="middle-content">
                  <h2 >{data.title}</h2>
                  <p>{data.description}</p>
              <div className="field-button" data-aos="flip-up" data-aos-delay="150">
                  <div className="right-img-dec">
                    <input type="email" class="inner-decinput" placeholder="Enter your Email Adress" name="email" />
                  </div>
                  <button type="submit" className="button for-subscribe" >
                  <FormattedMessage id="subscribe.subscribe" defaultMessage="Subscribe" />
                  <ArrowForwardIosIcon/>
                  </button>
              </div>
            </div>
          </div>
      </div>

    );
  };

  Subscribe.propTypes = {
    className: PropTypes.string.isRequired,
  }

  export default Subscribe;  
  