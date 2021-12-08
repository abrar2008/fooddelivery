import React, { useEffect, useState } from "react";
import './Tabs.css';
import DeliveryTab from '../TimingTabs/DeliveryTab';
import PickupTab from '../TimingTabs/PickupTab';

// https://blog.logrocket.com/how-to-build-tab-component-react/
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('');

  //  Functions to handle Tab Switching

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  useEffect(() => {
    setActiveTab("tab1");
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Delivery Time</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Pick-up Time</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <DeliveryTab /> : <PickupTab />}
      </div>
      <div className="clearfix"></div>
    </div>
  );
};
export default Tabs;
