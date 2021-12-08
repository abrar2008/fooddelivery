import React from 'react';
import './orderingInfo.css';

export default function OrderingInfo() {
  return (
    <div className="ordering-info">
      <div className="infoItems">
        <div className="btn info">20% OFF</div>
        <div className="prepTime info-area">
          <div className="timeIco ico"></div>
          <div className="timeInfo">Prep time : 45 Mins.</div>
        </div>
        <div className="minOrd info-area">
          <div className="minOrdIco ico"></div>
          <div className="minOrdInfo">Min Order : $15</div>
        </div>
      </div>
      <div className="user-interaction-Info">
        <div className="rating info-area">
          <div className="ratingIco ico"></div>
          <div className="ratingInfo">4.5/5</div>
        </div>
        <div className="review info-area">
          <div className="reviewIco ico"></div>
          <div className="reviewInfo">50 Reviews</div>
        </div>
      </div>
    </div>
  )
}
