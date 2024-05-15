// import Menu from "./Menu"
// import { useState, useEffect } from "react";
// const Accordian_without_category = ({ data, title,activeAccordion, setAccordion }) => {
//     console.log("Accordian_without_props", data, title,activeAccordion)
//     // const [accordian_Status, set_Accordian_Status] = useState(false);

//     const toggleAccordian =() =>{
//         setAccordion();
//     }

//     return (
//         <>
//             <div className="cursor-pointer" onClick={toggleAccordian}>
//                 <div className="category w-48 flex justify-between flex-wrap shadow-lg bg-gray-50 py-2 px-3 mt-8 mb-4 rounded-lg md:w-auto lg:w-auto" onClick={() => toggleAccordian()}>
//                     <span className="font-medium font-poppins text-xl">{title} ({data.length})</span>
//                     <span>🔽</span>
//                 </div>
//             </div>
//             {activeAccordion && (
//                 data.map((menu) => {
//                     console.log(menu, "im menu")
//                     const { name, price, description, imageId, defaultPrice, finalPrice, id } = menu?.card?.info || [];
//                     const menu_props = { name, price, description, imageId, defaultPrice, finalPrice }
//                     return <Menu key={id} {...menu_props} />
//                 })
//             )
                
//             }
//         </>
//     )
// }

// export default Accordian_without_category;


import React, { useState, useEffect } from "react";
import Menu from "./Menu";

const Accordian_without_category = ({ data, title, filterBtnStatus, activeAccordion, setAccordion }) => {
  const [menuData, setMenuData] = useState(data);

  // Handle accordion toggle
  const toggleAccordion = () => {
    setAccordion(!activeAccordion); // Toggle accordion state
  };

  // Filter menuData when filterBtnStatus changes
  useEffect(() => {
    if(filterBtnStatus){
        const filteredMenu = data.filter((menu) => {
            const isVeg = menu?.card?.info?.isVeg === 1;
            const isVegClassifierVeg = menu?.card?.info?.itemAttribute?.VegClassifier === 'VEG';
            return isVeg || isVegClassifierVeg;
        });
      
        setMenuData(filteredMenu); // Update menuData with filtered menu items
    }
    else{
        setMenuData(data)
    }
  }, [data, filterBtnStatus]); // Re-run effect when data or filterBtnStatus changes

//   console.log("Filtered menu data:", menuData);

  return (
    <>
      <div className="cursor-pointer" onClick={toggleAccordion}>
        <div className="category w-auto flex justify-between flex-wrap shadow-lg bg-gray-50 py-2 px-3 mt-8 mb-4 rounded-lg md:w-auto lg:w-auto">
          <span className="font-medium font-poppins text-xl">{title} ({data.length})</span>
          <span>{activeAccordion ? '🔼' : '🔽'}</span>
        </div>
      </div>
      {/* Render menu items if accordion is active */}
      {activeAccordion && menuData.map((menu) => {
        const { name, price, description, imageId, defaultPrice, finalPrice, id, isVeg } = menu.card.info || {};
        return (
          <Menu
            key={id}
            name={name}
            price={price}
            description={description}
            imageId={imageId}
            defaultPrice={defaultPrice}
            finalPrice={finalPrice}
            isVeg={isVeg}
            menu={menu}
          />
        );
      })}
    </>
  );
};

export default Accordian_without_category;
