import React, {useState, useEffect} from 'react';
import Feature from '../feature/feature';
import './bestFeatures.css';
import OrderingInfo from '../orderinginfo/orderingInfo';

// import imgGoodFood from '../../assets/images/goodfood.png';
// import imgBestOffers from '../../assets/images/bestoffers.png';
// import imgFastDeliv from '../../assets/images/fastdeliv.png';

const imgPathGoodFood = 'http://localhost:3000/assets/images/goodfood.png';
const imgPathBestOffers = 'http://localhost:3000/assets/images/bestoffers.png';
const imgPathFastDeliv = 'http://localhost:3000/assets/images/fastdeliv.png';

const featureItemsList = [
  {
    itemClass: "goodfood",
    // bkgndImage: imgGoodFood,
    bkgndImage: imgPathGoodFood,
    title: "Good Food",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout Many desktop publishing packages."
  },
  {
    itemClass: "beftOff",
    // bkgndImage: imgBestOffers,
    bkgndImage: imgPathBestOffers,
    title: "Best Offers",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout Many desktop publishing packages."
  },
  {
    itemClass: "fastdeliv",
    // bkgndImage: imgFastDeliv,
    bkgndImage: imgPathFastDeliv,
    title: "Fast Delivery",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout Many desktop publishing packages."
  }
];

export default function BestFeatures() {
  const [featureItems, setFeatureItems] = useState([]);

  useEffect(() => {
    setFeatureItems(featureItemsList);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="area-section best-features">
      <OrderingInfo />
      <div className="headingBf heading">Our Best Feature</div>
      <div className="bfList">
        {featureItems.length > 0 && featureItems.map((item, index) => {
          return <Feature key={index} {...item} />
        })}
      </div>
    </div>
  )
}
