import React, { useRef, useCallback, useEffect, useState } from 'react';
import './Carousel.css';
import './Arrows.css';
import CarouselSlide from './CarouselSlide';

// https://blog.logrocket.com/building-carousel-component-react-hooks/
// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0
// https://brainhub.eu/library/react-carousel/
// https://github.com/brainhubeu/react-carousel
function Carousel({children, slides, itemClassNames, itemWidth, activeSlideIndex, offset, slidesPerPage}) {

  const [slideItems, setSlideItems] = useState([]);

  const getChildren = (children, slides) => {
    if (!children) {
      if (slides) {
        return slides;
      }
      return [];
    }
    if (Array.isArray(children)) {
      return children;
    }
    return [children];
  };

  const clamp = (value, slides) => {
    const getChildren = () => {
      if (slides) {
        return slides;
      }
      return [];
    };

    const maxValue = getChildren().length - 1;
    if (value > maxValue) {
      return maxValue;
    }
    if (value < 0) {
      return 0;
    }
    return value;
  };

  const childrenItems = getChildren(children, slides);

  useEffect(() => {
    setSlideItems(childrenItems);
  }, [childrenItems]);


  /* ========== rendering ========== */
  const renderCarouselItems = () => {
    return (
      <div className="Carousel__trackContainer">
        <ul className="Carousel__track"
          // {...trackCustomProps}
        >
          {slideItems.map((carouselSlide, index) => (
            <CarouselSlide
              key={index}
              currentSlideIndex={activeSlideIndex}
              index={index}
              width={itemWidth}
              offset={index !== slideItems.length ? offset : 0}
              itemClassNames={itemClassNames}
              // {...slideCustomProps}
            >
              {carouselSlide}
            </CarouselSlide>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="Carousel__container">
      <div className="Carousel">
        {renderCarouselItems()}
      </div>
    </div>
  )
}


export default Carousel;
// export default withResizeDetector(React.memo(Carousel));
