import React, {useState, useRef, useEffect} from 'react';
import './bannerTop.css';
import ClosedMessageBox from '../closedMessageBox/closedMessageBox';

export default function BannerTop() {
  const [showClosedBox, setShowClosedBox] = useState(true);
  const toggleFunc = useRef(null);


  const showCloseBox = () => {
    if (toggleFunc.current) {
      document.body.classList.toggle('overlay');
      document.querySelector('#exploreOurMenu').style.zIndex = 6;
      toggleFunc.current();
    }
  };

  useEffect(() => {
    showCloseBox();
  }, []);

  return (
    <div className="bannerTop">
      <img src="../../assets/images/actualBkgnd.png" alt="" />
      {/* <div className="img-container">
        <img src="../../assets/images/actualBkgnd.png" alt="" />
      </div> */}
      <div className="header">
        <div className="logo-search">
          <div className="sitelogo"></div>
          <div className="search">
            <span className="searchIco"></span>
            <input type="text" placeholder="Search Merchant" />
          </div>
        </div>
        <div className="menu-top">
            <div><a href="">Menu</a></div>
            <div><a href="">Grocery</a></div>
            <div><a href="">Catering</a></div>
            <div><a href="">Reservations</a></div>
        </div>
        <div className="buttons">
          <div className="btnIco like"></div>
          <div className="btnIco cart"></div>
          <div className="btn login"><span>Login | Register</span></div>
        </div>
      </div>
      <div className="header-460">
        <div className="menu-bread">X</div>
        <div className="buttons">
          <div className="btnIcon searchIco"></div>
          <div className="btnIcon loginIco">X</div>
          <div className="btnIcon cartIco"></div>
        </div>
      </div>
      <div className="bannerPartMid">
        <div className="logofood bItem"></div>
        <div className="offMsg bItem">Get 10% off on your first order.</div>
        <div className="bannerHeading bItem">
          <span className="welcome">Welcome to</span><br />
          <span className="merchantName">Merchant Name</span>
        </div>
        <div className="regionalNames bItem">$$ | Italian, Asian, Chinese, etc</div>
        <div className="address bItem">
          <span className="addressText">Airport Dr Torrance, CA 90505</span>
          <span className="locIco"></span>
        </div>
      </div>
      <ClosedMessageBox toggleFunc={toggleFunc} closedMessage="Opens at Mon, 4:30 PM." />
    </div>
  )
}
