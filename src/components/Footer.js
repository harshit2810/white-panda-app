import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <div className="content-container footer">
        <div className="footer--social">
            <img alt="twitter" src="/icons/twitter.svg" />
            <img alt="linkedin" src="/icons/linkedin.svg" />
            <img alt="instagram" src="/icons/instagram.svg" />
            <img alt="fb" src="/icons/fb.svg" />
        </div>
        <div className="footer--copyright">
            Copyright @ 2019 White Panda Media pvt. Ltd.<br/>
            All rights reserved
        </div> 
        <div className="footer--links">
            <Link className="footer--link" to="/privacy">
                Privacy policy
            </Link><span className="footer--pipe">|</span>
            <Link className="footer--link" to="/terms">
                Terms of service
            </Link><span className="footer--pipe">|</span>
            <Link className="footer--link" to="/service">
                Service agreement
            </Link><span className="footer--pipe">|</span>
            <Link className="footer--link" to="/contact">
                Contact us
            </Link>
        </div>
    </div>
  </div>
);

export default Footer;