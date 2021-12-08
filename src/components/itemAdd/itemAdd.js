import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react'
import './itemAdd.css';

const sizeItems = {
  idPrefix: 'size',
  itemsList: [
    {key: 1, label: 'Small'},
    {key: 2, label: 'Medium'},
    {key: 3, label: 'Large'},
  ]
};

const drinkChoices = {
  idPrefix: 'drink',
  itemsList: [
    {key: 1, label: 'Coke'},
    {key: 2, label: 'Orange'},
    {key: 3, label: 'Orange'},
    {key: 4, label: 'Orange'},
    {key: 5, label: 'Sprite'},
  ]
};

const sideOptions = {
  idPrefix: 'so',
  itemsList: [
    {key: 1, label: 'Fries'},
    {key: 2, label: 'Mozzarella Sticks'},
    {key: 3, label: 'Salad'},
  ]
};

const addOns = {
  idPrefix: 'ao',
  itemsList: [
    {key: 1, label: 'Item Name 1'},
    {key: 2, label: 'Item Name 2'},
    {key: 3, label: 'Item Name 3'},
  ]
};

const instructionsText = "No Lettuce, Extra Spicy, Less Sugar, etc.";

const ItemAdd = forwardRef(({toggleFunc, item}) => {
// const ItemAdd = forwardRef(({props, ref}) => {
  const [counter, setCounter] = useState(1);
  const [showAddItemBox, setShowAddItemBox] = useState(false);
  const [countSideOptionsSelected, setCountSideOptionsSelected] = useState(0);
  const [countAddonsSelected, setCountAddonsSelected] = useState(0);

  // Use this method to toggle the modal !
  const toggleModal = () => {
    setShowAddItemBox(visible => !visible);
  }

//   useImperativeHandle(
//     ref,
//     () => ({
//       toggleModal() {
//         setShowAddItemBox(visible => !visible);
//         }
//     }),
// )

  const handleIncrementCounter = (event) => {
    event.preventDefault();
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  const handleDecrementCounter = (event) => {
    event.preventDefault();
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  const handleAddItem = (event) => {
    event.preventDefault();
    alert('clicked');
  }

  const handleClose = (event) => {
    event.preventDefault();
    setShowAddItemBox(false);
    document.body.classList.toggle('overlay');
  }

  const handleSideOptionChange = (event) => {
    // event.preventDefault();
    const targetElement = event.target;
    const checked = targetElement.checked;
    let tempCount = countSideOptionsSelected;
    if (checked && tempCount < 3) {
      tempCount++;
    }
    if (!checked && tempCount > 0) {
      tempCount--;
    }
    setCountSideOptionsSelected(tempCount);
    if (tempCount >= 3) {
      targetElement.checked = false;
      tempCount--;
      setCountSideOptionsSelected(tempCount);
      alert('select only 2');
    }
  }

  const handleAddonChange = (event) => {
    // event.preventDefault();
    const targetElement = event.target;
    const checked = targetElement.checked;
    let tempCount = countAddonsSelected;
    if (checked && tempCount < 3) {
      tempCount++;
    }
    if (!checked && tempCount > 0) {
      tempCount--;
    }
    setCountAddonsSelected(tempCount);
    if (tempCount >= 3) {
      targetElement.checked = false;
      tempCount--;
      setCountAddonsSelected(tempCount);
      alert('select only 2');
    }
  }

  useEffect(() => {
    toggleFunc.current = toggleModal;
  }, []);

  return (
    <div className={`itemBoxContainer${showAddItemBox ? '' : ' hidden'}`}>
      <div className="itemBox">
        <div className="rowTitle">
          <div className="itemTitle">{item.name}</div>
          <div className="closeBox tIco closeBgBlackIco" onClick={handleClose}>&nbsp;</div>
        </div>
        <div className="item-interact-Info">
          <div className="review">
            <div className="reviewIco rrIco"></div>
            <div className="reviewInfo last">{item.reviewCount > 0 ? `${item.reviewCount} Reviews` : 'Be the first to review this '}</div>
          </div>
          {item.reviewCount > 0 && (
            <div className="rating">
              <div className="ratingIco rrIco"></div>
              <div className="ratingInfo last">{item.ratingOutOf5}/5</div>
            </div>
          )}
        </div>
        <div className="section size">
          <div className="sub-title">
            <div className="actualTitle">Size</div>
            <div className="indicator">Required</div>
          </div>
          <div className="sizeChoices">
            {sizeItems && sizeItems.itemsList.length > 0 && sizeItems.itemsList.map((item, index) => (
              <div className="sizePick">
                <input type="radio" id={`${sizeItems.idPrefix}-${index + 1}`} name={sizeItems.idPrefix} value={item.key} className="redText" />
                <label htmlFor={`${sizeItems.idPrefix}-${index + 1}`}>{item.label}</label>
              </div>
            ))}
          </div>
          <div className="dashed">&nbsp;</div>
        </div>
        <div className="section drink">
          <div className="sub-title">
            <div className="actualTitle">Drink Choice</div>
            <div className="redText">Required</div>
          </div>
          <div className="drinkChoices">
            {drinkChoices && drinkChoices.itemsList.length > 0 && drinkChoices.itemsList.map((item, index) => (
              <div className="drinkPick">
                <input type="radio" id={`${drinkChoices.idPrefix}-${index + 1}`} name={drinkChoices.idPrefix} value={item.key} className="redText" />
                <label htmlFor={`${drinkChoices.idPrefix}-${index + 1}`}>{item.label}</label>
              </div>
            ))}
          </div>
          <div className="dashed">&nbsp;</div>
        </div>
        <div className="section sideoptions">
          <div className="sub-title">
            <div className="actualTitle">Side Option (Select up to 2)</div>
            <div className="redText">Required</div>
          </div>
          <div className="sideOptions">
            {sideOptions && sideOptions.itemsList.length > 0 && sideOptions.itemsList.map((item, index) => (
              <div className="optionPick">
                <input type="checkbox" id={`${sideOptions.idPrefix}-${index + 1}`} name={sideOptions.idPrefix} value={item.key} className="redText" onChange={handleSideOptionChange} />
                <label htmlFor={`${sideOptions.idPrefix}-${index + 1}`}>{item.label}</label>
              </div>
            ))}
          </div>
          <div className="dashed">&nbsp;</div>
        </div>
        <div className="section addons">
          <div className="sub-title">
            <div className="actualTitle">Add-Ons (Select up to 2)</div>
            {/* <div className="redText">Required</div> */}
          </div>
          <div className="addOns">
            {addOns && addOns.itemsList.length > 0 && addOns.itemsList.map((item, index) => (
              <div className="addonPick">
                <input type="checkbox" id={`${addOns.idPrefix}-${index + 1}`} name={addOns.idPrefix} value={item.key} className="redText" onChange={handleAddonChange} />
                <label htmlFor={`${addOns.idPrefix}-${index + 1}`}>{item.label}</label>
              </div>
            ))}
          </div>
          <div className="dashed">&nbsp;</div>
        </div>
        <div className="instructions">
          <div className="innerTitle">Special Instructions</div>
          <input type="text" readOnly disabled value={instructionsText} />
        </div>
        <div className="btnContainer">
          <div className="incrDecrBtns">
            <button type="button" className="decr" onClick={handleDecrementCounter}><span>-</span></button>
            <div className="counter"><span>{counter}</span></div>
            <button type="button" className="incr" onClick={handleIncrementCounter}><span>+</span></button>
          </div>
          <button type="button" className="addBtn" onClick={handleAddItem}>
            <div className="btnLabel">Add to Cart</div>
            <div className="priceText">{item.price}</div>
          </button>
        </div>
      </div>
    </div>
  )
});

export default ItemAdd;
