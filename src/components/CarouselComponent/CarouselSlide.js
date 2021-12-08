// import React, { memo, useEffect, useRef } from 'react';
import React from 'react';
import './CarouselSlide.css';

function CarouselSlide({children, currentSlideIndex, index, width, offset, itemClassNames}) {
  return (
    <li className={`CarouselItem${itemClassNames != null ? ` ${itemClassNames}` : ''}${index === currentSlideIndex ? ' CarouselItem--active' : ''}`}
      style={{
        marginRight: `${offset / 2}px`,
        marginLeft: `${offset / 2}px`,
        width: `${width}px`,
        maxWidth: `${width}px`,
        minWidth: `${width}px`,
      }}
    >
      {children}
    </li>
  )
}

export default CarouselSlide;
// export default memo(CarouselSlide);
