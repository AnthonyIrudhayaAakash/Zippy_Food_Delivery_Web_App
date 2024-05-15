import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Offer_Timing from "./Offer_Timing";
import Menu_category from "./Menu_category";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import Food_Category_Header from "./Food_Category_Header";
import useRestaurentMenu from "../configs/useRestaurentMenu";
import Accordian_with_category from "./Accordian_with_category";
import Accordian_without_category from "./Accordian_without_category";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../configs/UserContext";
const RestaurentMenu = () => {
    const { resid } = useParams();
    const menulist = useRestaurentMenu(resid);
    const [filterbtnstatus, setFilterBtnStatus] = useState(false);
    const [vegNonVeg, setVegNonVeg] = useState("Filter");
    const [accordion, setAccordion] = useState(null);
    const [nested_Accordion, set_nested_Accordion]= useState(false);
    
    const {userName} = useContext(UserContext)

    const toggleAccordion = (index) => {
        setAccordion(accordion === index ? null : index);
    };

    const toggle_status = (index) => {
        toggleAccordion(index);
    };

    
    if (!menulist) {
        return <Shimmer />;
    }

    const { info: { name: resname, cuisines, avgRating, areaName, costForTwoMessage, id, totalRatings,totalRatingsString } } = menulist?.cards?.[2]?.card?.card || {};
    const { slaString, costForTwoMessage: offerMessage } = menulist?.cards?.[0]?.card?.card?.info?.sla || {};
    const filterLargerArray = menulist?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
        const cardType = item?.card?.card?.["@type"];
        return cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    });
    console.log("Check MenuList", menulist)
    console.log("Check MenuList Filter array", filterLargerArray)
    return (
        <div className="flex justify-center">
            <div className="menu-container w-auto h-auto sm:w-3/5">
                <div className="">
                    <div className="title-container flex flex-col bg-gradient-to-t from-gray-200 to-white p-4 rounded-2xl">
                        <div>
                            <h1 className="rest-name font-roboto font-extrabold text-2xl">{resname}</h1>
                            <h1 className="font-poppins font-bold text-lg mx-2 my-2 animate-bounce text-orange-500 drop-shadow-2xl">Hey {userName}, We've got your Menu😋!</h1>
                        </div>
                        <div className="border border-gray-200 rounded-2xl px-4 py-2">
                            <div className="title-section-two flex items-center my-1">
                                <svg className=" mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
                                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear)" />
                                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white" />
                                    <defs><linearGradient id="StoreRating20_svg__paint0_linear" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B" /><stop offset="1" stopColor="#128540" /></linearGradient></defs>
                                </svg>
                                <p className="rest-avgrating font-poppins text-base font-medium">{avgRating} <span>({totalRatings>=100? totalRatingsString:""})</span> . <span>{costForTwoMessage}</span></p>
                            </div>
                            
                            <Link className=" text-orange-500 underline font-semibold">{cuisines?.join(", ")}</Link>
                            <p className="rest-area-distance text-gray-400 text-sm my-2">{areaName}, {slaString}</p>
                            
                            
                            {/* <hr className="w-750 my-2" /> */}

                        </div>
                        
                    </div>
                    <Offer_Timing slaString={slaString} costForTwoMessage={costForTwoMessage} />
                    <hr className=" my-2" />
                    <div className={`menu-filter-btn-div w-24 px-3 py-2 rounded-lg flex items-center transition hover:scale-90 transform ${filterbtnstatus ? 'bg-white text-orange-500 border-2 border-orange-500' : 'bg-orange-500 text-white'}`}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.3996 5.99897C13.3996 6.66172 12.8623 7.19897 12.1996 7.19897C11.5368 7.19897 10.9996 6.66172 10.9996 5.99897C10.9996 5.33623 11.5368 4.79897 12.1996 4.79897C12.8623 4.79897 13.3996 5.33623 13.3996 5.99897ZM14.9996 5.99897C14.9996 7.54537 13.746 8.79897 12.1996 8.79897C10.9311 8.79897 9.85962 7.95547 9.51546 6.79878L1.80875 6.79878C1.36692 6.79878 1.00875 6.44061 1.00875 5.99878C1.00875 5.55695 1.36692 5.19878 1.80875 5.19878L9.51558 5.19878C9.85986 4.04228 10.9312 3.19897 12.1996 3.19897C13.746 3.19897 14.9996 4.45258 14.9996 5.99897ZM3.8 13.4527C3.13726 13.4527 2.6 12.9154 2.6 12.2527C2.6 11.59 3.13726 11.0527 3.8 11.0527C4.46274 11.0527 5 11.59 5 12.2527C5 12.9154 4.46274 13.4527 3.8 13.4527ZM3.8 15.0527C2.2536 15.0527 1 13.7991 1 12.2527C1 10.7063 2.2536 9.45271 3.8 9.45271C5.0683 9.45271 6.13964 10.296 6.48396 11.4524H14.1953C14.6372 11.4524 14.9953 11.8106 14.9953 12.2524C14.9953 12.6942 14.6372 13.0524 14.1953 13.0524H6.48414C6.14001 14.2092 5.06852 15.0527 3.8 15.0527Z" fill={filterbtnstatus ? '#FFA500' : '#ffffff'} fillOpacity="0.92" />
                        </svg>
                        <button onClick={() => {
                            setFilterBtnStatus(!filterbtnstatus);
                            setVegNonVeg(vegNonVeg === "Filter" ? "Veg" : "Filter");
                            
                        }} className="w-16 focus:outline-none font-poppins">{vegNonVeg}</button>
                    </div>
                    

                </div>
                <div>
                    {filterLargerArray.map((menu, index) => {
                        const { card: { card } } = menu;
                        const { id } = card.info || {};
                        const { title, itemCards, categories } = card;
                        const hasCategories = categories && categories.length > 0;
                        // console.log("consiji menuher",menu)
                        return (
                            <div key={id}>
                                {hasCategories && (
                                    <>
                                        <div className="cursor-pointer" onClick={() => toggle_status(index)}>
                                            <div className="category flex justify-between flex-wrap  w-auto shadow-lg bg-gray-50 py-2 px-3 mt-8 mb-4 rounded-lg md:w-auto lg:w-auto sm:w-3/5">
                                                <span className="font-medium font-poppins text-xl">{title}({categories.length})</span>
                                                <span>🔽</span>
                                            </div>
                                        </div>
                                        {
                                            accordion === index && <Accordian_with_category
                                            key={title}
                                            data={categories}
                                            filterBtnStatus={filterbtnstatus}
                                            activeAccordion={accordion === index}
                                            setaccordion={() => setAccordion(accordion === index ? null : index)}
                                        />
                                        }
                                    </>
                                )}
                                {!hasCategories && (
                                    <Accordian_without_category
                                        key={title}
                                        data={itemCards}
                                        title={title}
                                        filterBtnStatus={filterbtnstatus}
                                        activeAccordion={accordion === index}
                                        setAccordion={() => setAccordion(accordion === index ? null : index)}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RestaurentMenu;
