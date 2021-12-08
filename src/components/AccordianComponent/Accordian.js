import React, {useEffect, useState} from 'react';
import './Accordian.css';

// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
export default function Accordian({ iconClass, title, content, children, enableHideButton, expanded }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(expanded);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="accordion-item">
      <div className="accordion-title-area">
        <div className="accordion-title-left">
          {iconClass && <div className={`accordion-ico ${iconClass}`}></div>}
          <div className="accordion-title">{title}</div>
        </div>
        {enableHideButton && <div className={`accordion-ocBtn${isActive ? ' active' : ''}`} onClick={() => setIsActive(!isActive)}></div>}
      </div>
      {isActive && content && <div className="accordion-content">{content}</div>}
      {isActive && children && <div className="accordion-content">{children}</div>}
    </div>
  )
}
