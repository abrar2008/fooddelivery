import React, {useState, useEffect, useRef} from 'react';
import Accordian from '../AccordianComponent/Accordian';
import MenuItem from '../menuitem/menuItem';
import './exploreMenu.css';
import ItemAdd from '../itemAdd/itemAdd';

const popularItemsList = [
  {
    imageIcon: "",
    imageClass: "dish1",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P4.00",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish4",
    name: "Dish Name",
    linkIcons: [ "Gluten free", "Halal", "Vegetarian" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 0,
    ratingOutOf5: 0,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish2",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic", "Gluten free", "Halal" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 1,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish3",
    name: "Dish Name",
    linkIcons: [ "Gluten free", "Vegan" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  }
];

const pizzaItemsList = [
  {
    imageIcon: "",
    imageClass: "dish1",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P4.00",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish4",
    name: "Dish Name",
    linkIcons: [ "Gluten free", "Halal", "Vegetarian" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 0,
    ratingOutOf5: 0,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish2",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic", "Gluten free", "Halal" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 1,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish3",
    name: "Dish Name",
    linkIcons: [ "Gluten free", "Vegan" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish1",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic", "Gluten free", "Halal" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 1,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish4",
    name: "Dish Name",
    linkIcons: [ "Gluten free", "Vegan" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish2",
    name: "Dish Name",
    linkIcons: [],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish3",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  }
];


const saladItemsList = [
  {
    imageIcon: "",
    imageClass: "dish1",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P4.00",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish4",
    name: "Dish Name",
    linkIcons: [ "Gluten free", "Halal", "Vegetarian" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 0,
    ratingOutOf5: 0,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish2",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic", "Gluten free", "Halal" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 1,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish3",
    name: "Dish Name",
    linkIcons: [ ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish1",
    name: "Dish Name",
    linkIcons: [ "Spicy", "Organic", "Gluten free", "Halal" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 1,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  },
  {
    imageIcon: "",
    imageClass: "dish4",
    name: "Dish Name",
    linkIcons: [ "Gluten free", "Vegan" ],
    text: "It is a long established fact that a reader will be distracted by the readable.",
    reviewCount: 10,
    ratingOutOf5: 4.5,
    price: "P2.50",
    originalPrice: "P4.00"
  }
];

export default function ExploreMenu() {
  const [popularItems, setPopularItems] = useState([]);
  const [pizzaItems, setPizzaItems] = useState([]);
  const [saladItems, setSaladItems] = useState([]);
  const [showAddItemBox, setShowAddItemBox] = useState(false);
  const [itemToAdd, setItemToAdd] = useState({});
  const toggleFunc = useRef(null);

  const handleAdd = (event, {imageClass, name, linkIcons, text, reviewCount, ratingOutOf5, price, originalPrice}) => {
    event.preventDefault();
    // alert(name);
    setItemToAdd({imageClass, name, linkIcons, text, reviewCount, ratingOutOf5, price, originalPrice});
    document.body.classList.toggle('overlay');
    // setShowAddItemBox(true);
    // childRef.current.toggleModal();
    toggleFunc.current();
  }

  useEffect(() => {
    setPopularItems(popularItemsList);
    setPizzaItems(pizzaItemsList);
    setSaladItems(saladItemsList);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <>
      <div id="exploreOurMenu" className="area-section exlpore-menu">
        <div className="heading-container">
          <div className="headingEm heading">Explore Our Menu</div>
          <div className="group-ordering">
            <div className="goIco"></div>
            <div className="goText">Group Ordering</div>
          </div>
        </div>
        <div className="menu">
            <div><a href="" className="btn popular">Most Popular</a></div>
            <div><a href="">Pizza</a></div>
            <div><a href="">Salad</a></div>
            <div><a href="">Burger</a></div>
            <div><a href="">Beverage</a></div>
            <div><a href="">Sandwiches</a></div>
            <div><a href="" className="btn more">More</a></div>
        </div>
        <div className="menu menu-460">
            <div><a href="" className="btn popular">Most Popular</a></div>
            <div><a href="">Pizza</a></div>
            <div><a href="">Salad</a></div>
            <div><a href="" className="btn more">More</a></div>
        </div>

        {/* <div className="caption">
          <div className="ico popular"></div>
          <div className="title">Most Popular</div>
        </div>
        <div className="items">
          {popularItems.length > 0 && popularItems.map((item, index) => {
            return <MenuItem {...item} key={index} />
          })}
        </div>

        <div className="caption">
          <div className="ico pizza"></div>
          <div className="title">Pizza</div>
        </div>
        <div className="cat-info">
          <div className="infoAlertIco"></div>
          <div className="infoAlertText">All Pizzas are Gluten-Free and come with a free 2L coke.</div>
        </div>
        <div className="items">
          {pizzaItems.length > 0 && pizzaItems.map((item, index) => {
            return <MenuItem {...item} key={index} />
          })}
        </div>

        <div className="caption">
          <div className="ico salad">X</div>
          <div className="title">Salad</div>
        </div>
        <div className="items">
          {saladItems.length > 0 && saladItems.map((item, index) => {
            return <MenuItem {...item} key={index} />
          })}
        </div> */}

        <Accordian enableHideButton={true} expanded={true} iconClass="popular" title={'Most Popular'}>
          <div className="items">
            {popularItems.length > 0 && popularItems.map((item, index) => {
              return <MenuItem {...item} key={index} handleAdd={handleAdd} />
            })}
          </div>
        </Accordian>

        <Accordian enableHideButton={true} expanded={true} iconClass="pizza" title={'Pizza'}>
          <div className="cat-info">
            <div className="infoAlertIco"></div>
            <div className="infoAlertText">All Pizzas are Gluten-Free and come with a free 2L coke.</div>
          </div>
          <div className="items">
            {pizzaItems.length > 0 && pizzaItems.map((item, index) => {
              return <MenuItem {...item} key={index} handleAdd={handleAdd} />
            })}
          </div>
        </Accordian>

        <Accordian enableHideButton={true} expanded={true} iconClass="salad" title={'Salad'}>
          <div className="items">
          {saladItems.length > 0 && saladItems.map((item, index) => {
            return <MenuItem {...item} key={index} handleAdd={handleAdd} />
          })}
        </div>
        </Accordian>

        <ItemAdd toggleFunc={toggleFunc} item={itemToAdd} />
      </div>
      {/* <ItemAdd show={showAddItemBox} itemName="Item Name" itemPrice="P3.00" reviewCount={10} ratingOutOf5={4.5} /> */}
      {/* <ItemAdd toggleFunc={toggleFunc} item={itemToAdd} /> */}
    </>
  )
}
