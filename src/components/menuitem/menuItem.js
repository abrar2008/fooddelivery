import React, {useState}  from 'react';
import './menuItem.css';

export default function MenuItem({imageIcon, imageClass, name, linkIcons, text, reviewCount, ratingOutOf5, price, originalPrice, handleAdd}) {

  return (
    <>
      <div className="item">
        <div className="detail-of-item-with-ico">
          <div className={`itemIco ${imageClass}`}></div>
          <div className="detail-of-item">
            <div className="itemTitle">{name}</div>
            <div className="itemLinkIcons">
              {linkIcons.length > 0 && linkIcons.map((icon, index) => {
                return <div key={index} title={icon} className={`linkIco ${icon}`}></div>
              })}
            </div>
            <p className="itemText">{text}</p>
          </div>
        </div>
        <div className="line-sep"></div>
        <div className="menu-item-info">
          <div className="user-interact-Info">
            <div className="review">
              <div className="reviewIco rIco"></div>
              <div className="reviewInfo">{reviewCount > 0 ? `${reviewCount} Reviews` : 'Be the first to review this '}</div>
            </div>
            {reviewCount > 0 && (
              <div className="rating">
                <div className="ratingIco rIco"></div>
                <div className="ratingInfo">{ratingOutOf5}/5</div>
              </div>
            )}
          </div>
          <div className="price-plus-add-area">
            <div className="price">
              <span className="pricing">{price}</span>
              {price !== originalPrice && (
                <span className="pricing-original">{originalPrice}</span>
              )}
            </div>
            <button type="button" className="add btn" onClick={(e) => handleAdd(e, {imageClass, name, linkIcons, text, reviewCount, ratingOutOf5, price, originalPrice})}>
              <div className="addBtn"></div>
            </button>
          </div>
        </div>
        <div className="menu-item-info-460">
          <div className="mii-left mii-area">
            <div className="price">
              <span className="pricing">{price}</span>
              {price !== originalPrice && (
                <span className="pricing-original">{originalPrice}</span>
              )}
            </div>
          </div>
          <div className="mii-right mii-area">
            {reviewCount > 0 && (
              <div className="rating">
                <div className="ratingIco rIco"></div>
                <div className="ratingInfo">{ratingOutOf5}/5</div>
              </div>
            )}
            <div className="review">
              <div className="reviewIco rIco"></div>
              <div className="reviewInfo">{reviewCount > 0 ? `${reviewCount} Reviews` : 'Be the first to review this '}</div>
            </div>
            <button type="button" className="add btn" onClick={(e) => handleAdd(e, {imageClass, name, linkIcons, text, reviewCount, ratingOutOf5, price, originalPrice})}>
              <div className="addBtn">&nbsp;</div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
