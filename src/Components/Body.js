import RestaurentCards from "./RestaurentCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Food_Carousal from "./Food_Carousal";
import useRestaurent from "../configs/useRestaurent";
import useOnlinestatus from "../configs/useOnlinestatus";
import Error from "./Error";

const Body = (props) =>{
    
   //Custom hook 
    const [ restaurent_data] = useRestaurent();
    // const check_internet_status = useOnlinestatus();
    
    const rest_data = restaurent_data;
    //ReactHooks
    const [filter_rest_data, setfilter_rest_data] = useState([]);
    
    //To update UI immediately after fetching data
    useEffect(()=>{
      setfilter_rest_data(rest_data);
    },[rest_data])
    
    //To update UI depends on search word in search bar
    useEffect(()=>{   
        const search_filter = rest_data.filter((restaurents)=>{
            return restaurents?.info?.name.toLowerCase().includes(props.searchdata.toLowerCase());
        })
        setfilter_rest_data(search_filter)      
    },[props.searchdata])


    //To render filtered data when filter button is clicked
    useEffect(()=>{
        if(props.filterbtnstatus){
            const btn_filter = rest_data.filter((restaurants)=>{
                return restaurants?.info?.avgRating >= 4.5;
            })
            setfilter_rest_data(btn_filter);
        }
        else{
            console.log("hello world")
            setfilter_rest_data(rest_data);
        }       
    },[props.filterbtnstatus])


    if(useOnlinestatus() === false){
      return <h1>Oops, Look like you're in offline, Check your internet connection
      </h1>
    }


    


    return filter_rest_data.length === 0 ? <Shimmer /> : (
        <div className="bodycontainer">
          <div className="Main-Container">

            {/* {food_data.map((food) => (
              <Food_Carousal props={food} />
            ))} */}
            <div>
            <Food_Carousal />
            </div>
            
            

            {filter_rest_data.map((restaurent) => (
              <Link key={restaurent.info.id} id="restaurent_card_link" to={"/restaurentmenu/" + restaurent.info.id}>
                <RestaurentCards restdata={restaurent} />
              </Link>
            ))}

          </div>
        </div>
      );
      
}; 

export default Body;
