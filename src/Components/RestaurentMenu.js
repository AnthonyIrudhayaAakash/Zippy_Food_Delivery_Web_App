import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import Offer_Timing from "./Offer_Timing";
import Menu_category from "./Menu_category";
import { useParams } from "react-router-dom";
import Food_Category_Header from "./Food_Category_Header";
import useRestaurentMenu from "../configs/useRestaurentMenu";

const RestaurentMenu = () =>{
    const i=2;
    // This hook is used to fetch the id of restaurent from link 
    const { resid } = useParams()
    //Custom Hook is called here to fetch restaurent menu details
    const menulist = useRestaurentMenu(resid);
    const filtermenulist = menulist;

    //State variables for filter button functionality
    const [filterbtnstatus, setfilterbtnstatus] =useState(false);
    const [veg_nonveg, set_veg_noneveg] = useState("Filter");
   

    const large_array =  filtermenulist?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
    const { name:resname, cuisines , avgRating , areaName, costForTwoMessage, key } = filtermenulist?.cards?.[0]?.card?.card?.info || {};
    const  { lastMileTravelString , slaString } = filtermenulist?.cards?.[0]?.card?.card?.info?.sla || {};

    const offertimingprops = {
        slaString,
        costForTwoMessage
    } 
    return menulist === null ? <Shimmer /> : (
        <div className="menu-container">
                {/*To Display restaurent name and some details about delivery*/}
            <div className="title-container">
                <div className="title-section-one">
                    <h3 className="rest-name">{resname}</h3>
                    <p className="rest-cuisines">{cuisines}</p>
                    <p className="rest-area-distance">{areaName}, {lastMileTravelString}</p>
                </div>
                <div className="title-section-two">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
                        <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                        <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white">
                        </path>
                        <defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs>
                    </svg>
                    <p className="rest-avgrating">{avgRating}</p>
                </div>
            </div>
            
            {/*Filter Button to display veg restaurents*/}
            <Offer_Timing {...offertimingprops} key={key}/>
                <div className="menu-filter-btn-div">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3996 5.99897C13.3996 6.66172 12.8623 7.19897 12.1996 7.19897C11.5368 7.19897 10.9996 6.66172 10.9996 5.99897C10.9996 5.33623 11.5368 4.79897 12.1996 4.79897C12.8623 4.79897 13.3996 5.33623 13.3996 5.99897ZM14.9996 5.99897C14.9996 7.54537 13.746 8.79897 12.1996 8.79897C10.9311 8.79897 9.85962 7.95547 9.51546 6.79878L1.80875 6.79878C1.36692 6.79878 1.00875 6.44061 1.00875 5.99878C1.00875 5.55695 1.36692 5.19878 1.80875 5.19878L9.51558 5.19878C9.85986 4.04228 10.9312 3.19897 12.1996 3.19897C13.746 3.19897 14.9996 4.45258 14.9996 5.99897ZM3.8 13.4527C3.13726 13.4527 2.6 12.9154 2.6 12.2527C2.6 11.59 3.13726 11.0527 3.8 11.0527C4.46274 11.0527 5 11.59 5 12.2527C5 12.9154 4.46274 13.4527 3.8 13.4527ZM3.8 15.0527C2.2536 15.0527 1 13.7991 1 12.2527C1 10.7063 2.2536 9.45271 3.8 9.45271C5.0683 9.45271 6.13964 10.296 6.48396 11.4524H14.1953C14.6372 11.4524 14.9953 11.8106 14.9953 12.2524C14.9953 12.6942 14.6372 13.0524 14.1953 13.0524H6.48414C6.14001 14.2092 5.06852 15.0527 3.8 15.0527Z" fill="rgba(2, 6, 12, 0.92)" fill-opacity="0.92">
                        </path>
                    </svg>
                    <span className="cost-two" onClick={
                        ()=>{
                            if(filterbtnstatus==false){
                                setfilterbtnstatus(true);
                                set_veg_noneveg("Veg");
                                
                            }
                            else{
                                setfilterbtnstatus(false);
                                set_veg_noneveg("Filter");
                            }
                        }
                    }>&nbsp;{veg_nonveg}</span>
                    

                </div> 
            
            
            {/* To display menu details in UI where menu_category and menu rendered */}
            {
                    large_array.map((menu,index)=>{
                        
                    
                        if(index>=2){
                            let i=0, j=0;
                            const { id } = menu?.card?.card?.itemCards?.[i]?.card?.info || menu?.card?.card?.categories?.[i]?.itemCards?.[j]?.card?.info || i+j || {};
                            // console.log("id", id);
                            return(
                                <>
                                <Food_Category_Header data={menu} />
                                <Menu_category key={id} data={menu} index={index} btn_status={filterbtnstatus}/>
                                
                                </>
                            )
                        }
                    })
                
            }
            
        </div>
    );
}

export default RestaurentMenu;