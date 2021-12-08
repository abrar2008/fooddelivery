// import React, {useState, useEffect, useCallback} from 'react';
import React, {useState, useCallback} from 'react';
import Tabs from '../TabComponent/Tabs';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './aboutMerchant.css';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function AboutMerchant() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(mapObj) {
    const bounds = new window.google.maps.LatLngBounds();
    mapObj.fitBounds(bounds);
    setMap(mapObj)
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);

  return (
    <div className="area-section about-merchant">
      <div className="headingAm heading">About this Merchant</div>
      <div className="details-container">
        <div className="contacts details">
          <div className="headingCd headingC">CONTACT DETAILS</div>
          <div className="ctItem">
            <div className="ctIco phone icoAm"></div>
            <div className="ctText phone">+ 00000000000</div>
          </div>
          <div className="ctItem">
            <div className="ctIco mail icoAm"></div>
            <div className="ctText mail">loremipsum@gmail.com</div>
          </div>
          <div className="ctItem">
            <div className="ctIco web icoAm"></div>
            <div className="ctText web">www.loremipsum.com</div>
          </div>
          <div className="socialIcons">
            <div className="scIco fb icoAm"></div>
            <div className="scIco in icoAm"></div>
            <div className="scIco tw icoAm"></div>
          </div>
        </div>
        <div className="address-map details">
          <div className="headingAmd headingC">ADDRESS &amp; MAP</div>
          <div className="details-of-address">
            <div className="address-area">
              <div className="addrIco icoAm"></div>
              <div className="addrText">2403 Park Bolevart, happy, TX, Texas, United States-79042.</div>
            </div>
            <div className="map-area" id="fdMap">
              {
                isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                  </GoogleMap>
                ) : <></>
              }
            </div>
          </div>
        </div>
        <div className="timings details">
          <Tabs />
        </div>
      </div>
    </div>
  )
}
