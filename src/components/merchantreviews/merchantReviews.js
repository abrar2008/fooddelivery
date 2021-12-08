import React, {useState, useEffect, useRef} from 'react';
// import Carousel from '../CarouselComponent/Carousel';
import ReviewItem from '../reviewitem/reviewitem';
import './merchantReviews.css';
import Carousel, { Dots, arrowsPlugin, slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const reviewersList = [
  {
    imageClass: "review1img",
    personName: "Person 1.",
    reviewDate: "25 Jan 2021",
    rating: 4.5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae",
    threadComments: []
  },
  {
    imageClass: "review1img",
    personName: "Yuri A.",
    reviewDate: "25 Jan 2021",
    rating: 4.5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae",
    threadComments: []
  },
  {
    imageClass: "review2img",
    personName: "Paula M.",
    reviewDate: "01 Dec 2020",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae",
    threadComments: [
      {
        image: "",
        link: ""
      },
      {
        image: "",
        link: ""
      }
    ]
  },
  {
    imageClass: "review3img",
    personName: "Gary E.",
    reviewDate: "25 Jan 2020",
    rating: 4.5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae",
    threadComments: []
  },
  {
    imageClass: "review1img",
    personName: "Yuri A.",
    reviewDate: "25 Jan 2021",
    rating: 4.5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae",
    threadComments: []
  },
];

// function eventFire(el, etype){
//   if (el.fireEvent) {
//     el.fireEvent('on' + etype);
//   } else {
//     var evObj = document.createEvent('Events');
//     evObj.initEvent(etype, true, false);
//     el.dispatchEvent(evObj);
//   }
// }

export default function MerchantReviews() {

  const firstSlideToShow = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [reviews, setReviews] = useState([]);

  const onChange = value => {
    setSelectedIndex(value);
  };

  useEffect(() => {
    setReviews(reviewersList);
    setSelectedIndex(selectedIndex === 1 ? 2 : 1);
    // setSelectedIndex(2);
    // if (firstSlideToShow && firstSlideToShow.current) {
    //   const el = firstSlideToShow.current;
    //   (el.onclick || el.click)();
    //   // firstSlideToShow.current.parent.click();
    //   alert('test-'+firstSlideToShow.current.test);
    // }

    setTimeout(() => {
      if (firstSlideToShow && firstSlideToShow.current) {
        // firstSlideToShow.current.parent.click();
        const el1 = firstSlideToShow.current;
        console.log(el1.parentElement);
        el1.parentElement.click();
        setSelectedIndex(selectedIndex);
        // (el1.onclick || el1.click)();
        // eventFire(el1, 'click');
        // alert('test1-'+firstSlideToShow.current.getAttribute('test'));
        // console.log(document.querySelector('div[clickable').parentElement);
      }
    }, 500);

    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="area-section merchant-reviews">
      <div className="headingMr heading">Merchant Reviews</div>
      <Carousel
        plugins={[
          'centered',
          {
            resolve: arrowsPlugin,
            options: {
              addArrowClickHandler: true,
            }
          },
          {
            resolve: slidesToShowPlugin,
            options: {
            numberOfSlides: 3
            }
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
            numberOfSlides: 1
            }
          }
        ]}
        breakpoints={{
          660: {
            plugins: [
              'centered',
              {
                resolve: arrowsPlugin,
                options: {
                  addArrowClickHandler: true,
                }
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                numberOfSlides: 1
                }
              }
           ]
          },
          980: {
            plugins: [
              'centered',
              {
                resolve: arrowsPlugin,
                options: {
                  addArrowClickHandler: true,
                }
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                numberOfSlides: 1
                }
              }
           ]
          }
        }}
        value={selectedIndex}
        nearestSlideIndex={selectedIndex}
        onChange={(value) => onChange(value)}
        // slidesPerPage={3}
        // itemWidth={244}
        offset={20}
        >
        {reviews.length > 0 && reviews.map((review, index) => {
          return <ReviewItem key={index} {...review} />
        })}
      </Carousel>
      <Dots
        value={selectedIndex}
        onChange={(value) => onChange(value)}
        thumbnails={
          [...Array(reviews.length)].map((val, index) => {
            if (index === selectedIndex)
              return <a><div key={index} clickable={index} ref={firstSlideToShow} className="line"></div></a>
            return <a><div key={index} className="line"></div></a>
          })
        }
      />
      {/* <div className="review-container">
        {reviews.length > 0 && reviews.map((review, index) => {
           return <ReviewItem key={index} {...review} />
        })}
      </div> */}
    </div>
  )
}
