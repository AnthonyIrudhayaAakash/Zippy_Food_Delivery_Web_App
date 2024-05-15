// import { useState } from "react";
// import Menu from "./Menu";

// const Accordian_with_category = ({data, activeAccordion, setaccordion}) => {
//     console.log("props in accordian : ", activeAccordion)
//     // const [accordian_Status, set_Accordian_Status] = useState(null)
//     // const [activeAccordion, setActiveAccordion] = useState(false);
//     const toggleAccordion = () => {
//         setaccordion();
//     };
    
//     return (
//         <>
//             {activeAccordion && data.map((category, index) => {
//                 const { title, itemCards,id } = category;
                
//                 console.log("category title", title)
//                 return (
//                     <div>
//                         <div className="cursor-pointer" onClick={toggleAccordion}>
//                             <div className="category w-40 flex justify-between flex-wrap shadow-lg bg-gray-50 py-2 px-3 mt-8 mb-4 rounded-lg">
//                             <span className="font-medium font-poppins text-xl">{title} ({itemCards.length})</span>
//                             <span>🔽</span>
//                             </div>
//                         </div>
//                         { activeAccordion && (
//                             itemCards.map((menu,index) => {
//                                 // const {id} = menu?.card?.info;
//                                 // console.log("catttt",id)
//                                 console.log("mennnnnn", menu)
//                                 const { id, name, price, description, imageId, defaultPrice, finalPrice } = menu.card.info || {};
//                                 return <Menu key={id} name={name} price={price} description={description} imageId={imageId} defaultPrice={defaultPrice} finalPrice={finalPrice} />;
//                             })
//                         )}
//                     </div>
//                 );
//             })}
//         </>
//     );
// }    

// export default Accordian_with_category;

// import Menu from "./Menu";
// import { useState } from "react";

// const Accordian_with_category = ({ data, activeAccordion, setaccordion }) => {
//     const toggleAccordion = () => {
//         setaccordion();
//     };

//     return (
//         <>
//             { data.map((category, index) => {
//                 console.log("category im", category)
//                 const { title, itemCards, id } = category;
//                 return (
//                     <div key={id}>
//                         <div className="cursor-pointer" onClick={toggleAccordion}>
//                             <div className="category w-40 flex justify-between flex-wrap shadow-lg bg-gray-50 py-2 px-3 mt-8 mb-4 rounded-lg">
//                                 <span className="font-medium font-poppins text-xl">{title} ({itemCards.length})</span>
//                                 <span>🔽</span>
//                             </div>
//                         </div>
//                         {activeAccordion && itemCards.map((menu) => {
//                             {console.log("im menu here", menu)}
//                             const { id, name, price, description, imageId, defaultPrice, finalPrice } = menu.card.info || {};
//                             return <Menu key={id} name={name} price={price} description={description} imageId={imageId} defaultPrice={defaultPrice} finalPrice={finalPrice} />;
//                         })}
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// export default Accordian_with_category;

import Menu from "./Menu";
import { useState } from "react";

const AccordionWithCategory = ({ data, filterBtnStatus }) => {
    console.log("filterBtnStatus", filterBtnStatus, data)
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (categoryId) => {
        setActiveAccordion((prevAccordion) => (prevAccordion === categoryId ? null : categoryId));
    };

    return (
        <>
            {data.map((category) => {
                const { title, itemCards, id } = category;
                const isOpen = activeAccordion === id;

                return (
                    <div key={id}>
                        <div className="cursor-pointer" onClick={() => toggleAccordion(id)}>
                            <div className="category w-auto flex justify-between flex-wrap shadow-lg bg-gray-50 py-2 px-3 mt-8 mb-4 rounded-lg md:w-auto lg:w-auto">
                                <span className="font-medium font-poppins text-xl">
                                    {title} ({itemCards.length})
                                </span>
                                <span>{isOpen ? "🔼" : "🔽"}</span>
                            </div>
                        </div>
                        {isOpen && (
                            <div>
                                {itemCards.map((menu) => {
                                    const { id, name, price, description, imageId, defaultPrice, finalPrice, isVeg } = menu.card.info || {};
                                    return (
                                        <Menu
                                            key={id}
                                            name={name}
                                            price={price}
                                            filterBtnStatus={filterBtnStatus}
                                            description={description}
                                            imageId={imageId}
                                            defaultPrice={defaultPrice}
                                            finalPrice={finalPrice}
                                            isVeg={isVeg}
                                            menu={menu}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default AccordionWithCategory;
