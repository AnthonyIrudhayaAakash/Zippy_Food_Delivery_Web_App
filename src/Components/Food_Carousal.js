import { useEffect, useState, useRef } from "react";
import { IMAGE_URL } from "../configs/constants";
import useRestaurent from "../configs/useRestaurent";
import Food_shimmer from "./Food_shimmer";
import { Link } from "react-router-dom";

const Food_Carousal = () => {
  const [restData, foodData, foodCarousal] = useRestaurent();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (foodCarousal?.[0]?.card?.card?.imageGridCards?.info) {
      setInfo(foodCarousal[0].card.card.imageGridCards.info);
    }
  }, [foodCarousal]);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollTo({
      left: scrollContainerRef.current.scrollLeft - 500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollTo({
      left: scrollContainerRef.current.scrollLeft + 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="food_caraousal_container overflow-hidden">
      <div className="caraousal_header_container flex justify-between items-center px-4">
        <h1 className="quote_1 font-semibold text-lg">
          {foodCarousal?.[0]?.card?.card?.header?.title || "Carousel Title"}
        </h1>
        <div className="caraousal_btn_container flex space-x-2">
          <button
            onClick={scrollLeft}
            className="fwd_btn_carousal w-8 rounded-s-full bg-gray-200 mx-1 p-2 focus:outline-none"
          >
            {"<"}
          </button>
          <button
            onClick={scrollRight}
            className="fwd_btn_carousal w-8 rounded-e-full bg-gray-200 mx-1 p-2 focus:outline-none"
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="nested_food_container flex px-4 overflow-x-auto hide-scrollbar"
      >
        {info.length === 0 ? (
          <Food_shimmer />
        ) : (
          info.map((data, index) => (
            <Link key={index} to={data.action?.link || "#"}>
              <div className="caraousal_image_div w-36 h-36 md:w-48 md:h-48 mr-4">
                <img
                  src={IMAGE_URL + data.imageId}
                  className="food_card_links object-cover w-full h-full"
                  alt="Food"
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Food_Carousal;

