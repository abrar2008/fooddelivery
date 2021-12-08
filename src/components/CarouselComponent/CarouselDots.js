// import React, { memo, useEffect, useRef } from 'react';
import React from 'react';
import './CarouselDots.css';

function CarouselDots({value, thumbnails, number, onChange, className}) {

  const calculateButtonValue = () => {
    const numberOfSlides = number || thumbnails.length;
    return value >= 0 ?
      value :
      value + numberOfSlides * Math.ceil(Math.abs(value / numberOfSlides));
  };

  const onDotClick = (index) => () => {
    const numberOfSlides = number || thumbnails.length;
    const moduloItem = calculateButtonValue() % numberOfSlides;

    return onChange(value - (moduloItem - index));
  };

  const renderCarouselDots = () => {
    if (thumbnails) {
      const dotsLength = isNaN(number) ? thumbnails.length : number;

      return thumbnails.slice(0, dotsLength).map((thumbnail, index) => (
        <li key={index}>
          <div className={`BrainhubCarousel__thumbnail${index === calculateButtonValue() % dotsLength ? ' BrainhubCarousel__thumbnail--selected' : ''}`}
            type="button"
            onClick={onDotClick(index)}
          >
            {thumbnail}
          </div>
        </li>
      ));
    }

    const dots = [];
    for (let i = 0; i < number; i++) {
      dots.push(
        <li key={i}>
          <div className={`BrainhubCarousel__dot${i === calculateButtonValue() % number ? ' BrainhubCarousel__dot--selected' : ''}`}
            type="button"
            onClick={onDotClick(i)}
          >
            {i + 1}
          </div>
        </li>,
      );
    }
    return dots;
  };


  return (
    <ul className={`BrainhubCarousel__dots ${className}`}>
      {renderCarouselDots()}
    </ul>
  );
};

export default CarouselDots;
// export default memo(CarouselDots);
