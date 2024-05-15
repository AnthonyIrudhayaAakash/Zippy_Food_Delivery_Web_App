import RestaurentCards, {Rated_Restaurent_cards} from "./RestaurentCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Food_Carousal from "./Food_Carousal";
import useRestaurent from "../configs/useRestaurent";
import useOnlinestatus from "../configs/useOnlinestatus";
import useLocationHead from "../configs/useLocationHead";
import Error from "./Error";
import { useContext } from "react";
import UserContext from "../configs/UserContext";

const Body = (props) =>{
    const { userName } = useContext(UserContext);
   //Custom hook 
    const [ restaurent_data] = useRestaurent();
    const location_head = useLocationHead();
    const With_Rating = Rated_Restaurent_cards(RestaurentCards);
    // const check_internet_status = useOnlinestatus();
    
    const rest_data = restaurent_data;
    //ReactHooks
    console.log("rest", rest_data)
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
            <div className="food_caraousal_container flex justify-center lg:justify-between ">
              <Food_Carousal />
            </div>
            
              <h1 className="font-poppins font-bold text-lg mx-2 my-2 animate-bounce text-orange-500 drop-shadow-2xl">Hey {userName}, We've got a feast at your doorstep!</h1>
              <h1 className="font-poppins font-semibold text-lg mx-2">{location_head}</h1>
              
              <div className="restaurent_links flex flex-wrap justify-center lg:justify-between">
                {filter_rest_data.map((restaurent) => (
                  <Link key={restaurent.info.id} className="restaurent_card_link transform hover:scale-90 transition duration-300 delay-75" to={"/restaurentmenu/" + restaurent.info.id}>
                    <div className="restaurent_cards_container flex justify-between transition-transform">
                      {console.log(restaurent?.info?.totalRatingsString, "ddd")}
                      {restaurent?.info?.totalRatingsString.includes("K" || "k") ? <With_Rating restdata={restaurent}/> : <RestaurentCards restdata={restaurent} />}
                      
                    </div>
                    
                  </Link>
                ))}
              </div>
            

          </div>
        </div>
      );
      
}; 

export default Body;
