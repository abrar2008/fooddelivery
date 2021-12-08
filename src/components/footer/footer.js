import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="area-section footer-area">
      <div className="social-area footer-section">
        <div className="site-logo"></div>
        <p className="locations">San Francisco, Binan, Laguna, Philippines</p>
        <div className="social-icons">
          <div className="scIco fb icoF"></div>
          <div className="scIco in icoF"></div>
          <div className="scIco tw icoF"></div>
          <div className="scIco li icoF"></div>
        </div>
        <div className="copyright">Copyright 2021, All rights reserved.</div>
      </div>
      <div className="company-area footer-section other-section">
        <div className="headingC">COMPANY</div>
        <div className="links">
          <div className="link"><a href="">About</a></div>
          <div className="link"><a href="">Blog</a></div>
          <div className="link"><a href="">Careers</a></div>
        </div>
      </div>
      <div className="services-area footer-section other-section">
        <div className="headingC">SERVICES</div>
        <div className="links">
          <div className="link"><a href="">Become A Merchant</a></div>
          <div className="link"><a href="">Become A Rider</a></div>
          <div className="link"><a href="">Get a Website</a></div>
          <div className="link"><a href="">Merchant Marketing</a></div>
          <div className="link"><a href="">Delivery Service</a></div>
        </div>
      </div>
      <div className="other-area footer-section other-section">
        <div className="headingC">OTHER LINKS</div>
        <div className="links">
          <div className="link"><a href="">Privacy Policy</a></div>
          <div className="link"><a href="">Terms &amp; Conditions</a></div>
          <div className="link"><a href="">Help Center</a></div>
        </div>
      </div>
    </div>
  )
}
