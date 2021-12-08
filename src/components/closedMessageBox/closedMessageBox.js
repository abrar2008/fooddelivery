import React, {forwardRef, useState, useEffect} from 'react'
import './closedMessageBox.css';

const ClosedMessageBox = forwardRef(({toggleFunc, closedMessage}) => {
  const [showCloseBox, setShowCloseBox] = useState(false);

  // Use this method to toggle the modal !
  const toggleModal = () => {
    setShowCloseBox(visible => !visible);
  }

  const handleClose = (event) => {
    event.preventDefault();
    setShowCloseBox(false);
    document.querySelector('#exploreOurMenu').style.zIndex = 15;
    document.body.classList.toggle('overlay');
  }

  const handleScheduleLater = (event) => {
    event.preventDefault();
    alert('shcedule-later');
  }

  const handleSearchNearby = (event) => {
    event.preventDefault();
    alert('search-nearby');
  }

  useEffect(() => {
    toggleFunc.current = toggleModal;
  }, []);

  return (
    <div className={`clsbxContainer${showCloseBox ? '' : ' hidden'}`}>
      <div className="clsbx">
        <div className="spacer">&nbsp;</div>
        <div className="closeBtn closeBgBlackIco" onClick={handleClose}>&nbsp;</div>
        <div className="clsImg closeMessageIco">&nbsp;</div>
        <div className="clsMessage">{closedMessage}</div>
        <div className="btnContainer">
          <button className="btn" onClick={handleScheduleLater}>Schedule for Later</button>
          <button className="btn" onClick={handleSearchNearby}>Search Nearby</button>
        </div>
      </div>
    </div>
  )
});

export default ClosedMessageBox;
