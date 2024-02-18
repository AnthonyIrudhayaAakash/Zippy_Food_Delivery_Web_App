import { useEffect, useState } from "react";
import { IMAGE_URL, NON_VEG_IMAGE_URL,VEG_IMAGE_URL, ALT_FOOD_IMAGE } from "../configs/constants";

const Menu = (props) => {
    console.log("menu props", props.vegClassifier);

   

    return ( 
        <div className="menu-category">
                    
            <div className="dish-info-div" >
                
                <div className="name-price-div">
                    <i>
                        <img src={props.vegClassifier === "VEG" || props.isVeg === 1 ? VEG_IMAGE_URL : NON_VEG_IMAGE_URL} width={15} height={15}alt="Food"></img>
                    </i>
                    <h4 className="dish-name">{props.name}</h4>
                    <p className="dish-price">₹{ props.price/100 || props.defaultPrice /100 || props.finalPrice/100 }</p>
                    <p className="dish-description">{props.description}</p>

                </div>

                <div className="dish-image-div" > 
                    <img src={ IMAGE_URL + props.imageId ? IMAGE_URL + props.imageId : ""}  width={75} height={75} className="dish-image"
                    onError={(e) => {
                        e.target.src = ALT_FOOD_IMAGE; // Set a fallback image if the original image fails to load
                    }}></img>
                </div>
            </div>


        </div>
    )

}

export default Menu;