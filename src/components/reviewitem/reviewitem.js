import React from 'react';
import './reviewitem.css';

const startCount = 5;

export default function ReviewItem({imageClass, personName, reviewDate, rating, comment}) {

  const ratingCalc = (rating, index) => {
    let compareVal = 0;
    if (index === 0) {
      compareVal = 1;
    }
    if (index === 1) {
      compareVal = 2;
    }
    if (index === 2) {
      compareVal = 3;
    }
    if (index === 3) {
      compareVal = 4;
    }
    if (index === 4) {
      compareVal = 5;
    }
    if (index === 5) {
      compareVal = 6;
    }

    if (rating !== compareVal) {
      if (rating < compareVal) {
        if (rating > index && rating < compareVal)
          return `star half`
        else
          return `star no`
      }
    }
    return `star`
  };

  return (
    <div className="review-item-sec">
            <div className={`reviewer-image ${imageClass}`}></div>
            <div className="title">
              <div className="name">{personName}</div>
              <div className="date">{reviewDate}</div>
            </div>
            <div className="stars">
              {[...Array(startCount)].map((val, index) => {
                return <div key={index} className={ratingCalc(rating, index)}></div>
              })}
            </div>
            <p className="reviewText">{comment}</p>
          </div>
  )
}
