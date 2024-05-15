import React from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../configs/cartSlice";
import { useState } from "react";
import { IMAGE_URL, NON_VEG_IMAGE_URL, VEG_IMAGE_URL, ALT_FOOD_IMAGE } from "../configs/constants";

const Menu = (props) => {
  const [count, setCount] = useState("Add");
  const dispatch = useDispatch();

  const menuItem = props?.menu;

  const handeRemoveItems = (menuItem) =>{
    dispatch(removeItems(menuItem));
    setCount(count === "Add" || count === 0 ? "Add" : count - 1);
  }



  const handleAdditems = (menuItem) => {
    dispatch(addItems(menuItem))
    setCount(count === "Add" ? 1 : count + 1);
  }

//   console.log("props in menu", props)
  // Truncate description to less than 50 characters
  const truncatedDescription = props?.description ? `${props.description.slice(0, 50)}${props.description.length > 50 ? '...' : ''}` : '';

  return ( 
    <div className="menu-category border-b-2 border-gray-200 p-3 my-2">
      <div className="dish-info-div flex justify-between">
        <div className="name-price-div">
          <i>
            <img
              src={props.vegClassifier === "VEG" || props.isVeg === 1 ? VEG_IMAGE_URL : NON_VEG_IMAGE_URL}
              width={15}
              height={15}
              alt="Food"
            />
          </i>
          <h4 className="dish-name font-poppins font-medium">{props.name}</h4>
          <p className="dish-price">₹{props.price / 100 || props.defaultPrice / 100 || props.finalPrice / 100}</p>
          {/* Render truncated description with ellipsis */}
          <p className="dish-description font-roboto text-sm my-2 text-gray-500 overflow-hidden whitespace-nowrap">
            {truncatedDescription}
          </p>
        </div>

        <div className="dish-image-div flex-shrink-0 relative">
          <div className="flex justify-center">
            <img
              src={props.imageId ? IMAGE_URL + props.imageId : ""}
              className="dish-image rounded-xl w-32 h-32 object-cover shadow-lg"
              onError={(e) => {
                e.target.src = ALT_FOOD_IMAGE; // Set a fallback image if the original image fails to load
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <button
                className="p-2 text-orange-500 bg-white align-baseline border-2 border-orange-500 rounded-lg focus:outline-none transition transform hover:scale-105" 
              >
                <span className="text-lg px-2" onClick={() => handeRemoveItems(menuItem)}>-</span>
                {count}
                <span className="text-lg px-2" onClick={() => handleAdditems(menuItem)}>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
