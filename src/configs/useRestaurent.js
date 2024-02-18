import { useEffect, useState } from "react"


const useRestaurent = () =>{

    const [restaurent_data, setrestaurent_data] = useState([]);
    const [food_data, setfood_data] = useState([]);

    const [food_carousal, setfood_caraousal] = useState([]);

    useEffect(()=>{
        fetch_restaurent_data();
    },[]);

    const fetch_restaurent_data = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json = await data.json();
        // console.log("json", json);
        const {restaurants} = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle || {};
        const {info} = json?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle || {};
        const food_circle_cards = json?.data?.cards || {};
        setfood_caraousal(food_circle_cards);
        setfood_data(info);
        setrestaurent_data(restaurants);
        // console.log(food_carousal,"car");
    }

    return [restaurent_data, food_data, food_carousal];
    
}
export default useRestaurent;