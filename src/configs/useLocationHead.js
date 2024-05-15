import { useEffect, useState } from "react";

const useLocationHead = () =>{
    const [title, set_title] = useState([]);

    useEffect(()=>{
        fetch_location_header();
    },[]);

    const fetch_location_header = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json = await data.json();
       
        const {title} = json?.data?.cards?.[1]?.card?.card?.header || {};
        
        set_title(title);
    }
    return title;
}

export default useLocationHead;