import React, {useState, useEffect} from "react";
import './TimingTabs.css';

const timingData = [
  {
    key: "Monday",
    timings: [
      {start: "8:00 AM", end: "3:00 PM"},
      {start: "5:00 PM", end: "11:00 PM"}
    ]
  },
  {
    key: "Tuesday",
    timings: [
      {start: "8:00 AM", end: "3:00 PM"},
    ]
  },
  {
    key: "Wednesday",
    timings: [
      {start: "8:00 AM", end: "3:00 PM"},
    ]
  },
  {
    key: "Thursday",
    timings: [
      {start: "8:00 AM", end: "3:00 PM"},
    ]
  },
  {
    key: "Friday",
    timings: [
      {start: "8:00 AM", end: "3:00 PM"},
      {start: "5:00 PM", end: "11:00 PM"}
    ]
  },
  {
    key: "Saturday",
    timings: [
      {start: "8:00 AM", end: "3:00 PM"},
    ]
  },
  {
    key: "Sunday",
    timings: []
  },
];

const DeliveryTab = () => {

  const [timings, setTimings] = useState([]);

  useEffect(() => {
    setTimings(timingData);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="delivery-tab tab tab1">
      {timings.length > 0 && timings.map((timing, index) => {
        return <div key={index} className="timing-item">
          <div className="title">{timing.key}</div>
          <div className="timeset">
            {timing.timings.length === 0 && 'Closed'}
            {timing.timings.length > 0 && timing.timings.map((set, idx) => {
              return <div key={idx} className="set">
                <span className="set-start">{set.start}</span>
                <span>--</span>
                <span className="set-start">{set.end}</span>
              </div>
            })}
          </div>
        </div>
      })}
    </div>
  );
};
export default DeliveryTab;
