import React from 'react';

const Food_Category_Header = (props) => {
    console.log("category props", props.data)
    const { title } = props?.data?.card?.card;
    const category_Length = props?.data?.card?.card?.itemCards?.length || props?.data?.card?.card?.categories?.length ;
    
    // const hide_content = ()=>{
    //     console.log("accordian clicked")
    // }

    if (props?.data?.card?.card?.title !== undefined) {
        return (
            <>
                <div className="cursor-pointer">
                    <div className="category w-48 flex justify-between flex-wrap shadow-lg bg-gray-50 py-2 px-3 mt-8 mb-4 rounded-lg md:w-auto lg:w-auto">
                        {/* Adjust width based on screen size */}
                        <span className="font-medium font-poppins text-xl">{title} ({category_Length})</span>
                        <span>🔽</span>
                    </div>
                </div>
                
            </>
        )
    } else {
        return null;
    }
}

export default Food_Category_Header;
