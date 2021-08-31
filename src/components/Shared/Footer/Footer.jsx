import React, { useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import footerLinks from "./links";
import Logo from "../Logo/logo2";
import "./footer.scss";
import LanguageChange from "./LanguageChange.jsx";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { dataLocalStorage } from "../../../localStorage";
import languages from "../../../translations/languages";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FormattedMessage } from "react-intl";

let langs = [];
for (let key in languages) langs.push(languages[key]);

const Footer = (props) => {
  let selectedLanguage = languages[props.locale];


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="right-section">
          {footerLinks.map((c, i) => (
            <LinkCategory key={i} {...c} />
          ))}
        </div>
      </div>
      <div className="copyright-section">
        <div className="copyright-center">
          <p className="left-part">
              <Logo/>
          </p>
          <div className="right-part">
            <div className="first-part">

            </div>
            <p className="phone-text"><div className="circle-icon"><PhoneIphoneIcon/></div><p>+383 44 222 222</p></p>
            <p className="phone-text"><div className="circle-icon"><MailOutlinedIcon/></div><p>info@shoferi.com</p></p>
            <p className="phone-text"><div className="circle-icon"><PhoneOutlinedIcon/></div><p><FormattedMessage id="footer.downoapp" defaultMessage="Download our app" /></p></p>
          </div>
        </div>
      </div>
      <div className="copyright-2section">
        <div className="copyright-2center">
          <p className="left-part">
          <FormattedMessage id="footer.copyright" defaultMessage="Copyright @ Shoferi. All right reserved." />
          </p>
          <div className="right-part">
            <p className="phone-text">
            <FormattedMessage id="footer.privacy" defaultMessage="Privacy" />
            </p>
            <p className="phone-text">
            <FormattedMessage id="footer.accesibility" defaultMessage="Accesibility" />
            </p>
            <p className="phone-text">
            <FormattedMessage id="footer.terms" defaultMessage="Terms" />
              </p>
            {/* <p className="lang"><LanguageOutlinedIcon/> 
              <p className="lang-name">
                <FormattedMessage id="footer.english" defaultMessage="English" />
              </p><ExpandMoreIcon/>
            
            </p> */}
                <div className="lang" >
                <div className="lang-dropdown">
                  {langs
                    .sort((a, b) => (a.language > b.language ? 1 : -1))
                    .map((language) => {
                      return (
                        <LanguageChange
                          key={language.locale}
                          {...language}
                          handleLanguageSwitch={() => {
                            props.setLocale(language.locale);
                            dataLocalStorage.setLocale(language.locale);
                          }}
                        />
                      );
                    })}
                </div>
                <div className="selected-language">
                  <div className="inline-dropdown">
                   {selectedLanguage.img}
                    <p>{selectedLanguage.language}</p>
                    <ArrowDropDownIcon />
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export const LinkCategory = (props) => {
  return (
    <div className="footer-content">
      <span className="category-section">{props.category}</span>

      <ul className="links">
        {props.links.map((l) => {
          return (
            <Link key={l.to} to={l.to} className="footer-link">
              {l.link}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
