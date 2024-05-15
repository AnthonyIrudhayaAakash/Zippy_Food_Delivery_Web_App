import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants"


const useRestaurentMenu =  ( resid ) =>{
    console.log("custom hook called");

    const [ res_menu, setres_menu]= useState(null);

    useEffect(()=>{

        fetch_menu();

    },[]);

    const fetch_menu =  async () => {
        const menudata = await fetch(MENU_API_URL+resid);

        const res_menu_data = await menudata.json();
        setres_menu(res_menu_data.data);
    }

   console.log("resss__menu", res_menu?.cards)

    return res_menu;

}
export default useRestaurentMenu;