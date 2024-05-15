import {IMAGE_URL, ALT_FOOD_IMAGE} from "../configs/constants"
const RestaurentCards = (props) =>{
    //const {restdata}=props;
    console.log(props, "im props");
    const { name, cloudinaryImageId, cuisines, avgRating, aggregatedDiscountInfoV3 } = props.restdata?.info || {};
    console.log("agri", aggregatedDiscountInfoV3)
    const { slaString } = props.restdata?.info?.sla || { slaString: 'Default Value' };
    //to display limited cuisines  
    const cuisinesToShow = cuisines.slice(0, 5).join(", ");
    const displaycuisines = cuisines.length >=5 ? `${cuisinesToShow}...` : cuisines.join(", ");
    //console.log(avgRating)
    return (
        <div className="Restaurent-Cards p-3 mx-3" style={{ width: '273px', height: '275px' }}>
            
            <div className="restaurent_image relative">
                <img src={IMAGE_URL+cloudinaryImageId} className=" rounded-3xl h-screen bg-gradient-to-b from-transparent via-gray-900 to-gray-900 bg-opacity-80" style={{ width: '273px', height: '182px' }} onError={(e) => {
                e.target.src = ALT_FOOD_IMAGE; // Set a fallback image if the original image fails to load
                }}></img>
                <div className="card_off_detail  inset-0 shadow">
                    <h1 className="absolute bottom-0 inset-x-2 text-white font-lilita font-semibold text-2xl">{aggregatedDiscountInfoV3?.header || ""} {aggregatedDiscountInfoV3?.subHeader || ""}
</h1>
                </div>
            </div>
            <h3 className="font-poppins font-semibold">{name}</h3>
            <p className="font-roboto flex flex-wrap">{displaycuisines}</p>
          
            <div className="rating">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white">
                    </path>
                    <defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs>
                </svg>

                <p className="font-roboto">&nbsp;{avgRating}<span>&nbsp;.&nbsp; {slaString}</span></p>
              
            </div>
            
        </div>

    );
};
export const Rated_Restaurent_cards = (RestaurentCards)=>{
    
    return (props)=>{
        const {totalRatingsString} = props?.restdata?.info;
        // console.log(props, "high props")
        // console.log(totalRatingsString.slice(0,1))
        return (
           <div className=" relative my-8">
            
            <label className="bg-orange-500 p-1 m-2 text-white rounded-md absolute z-10">{totalRatingsString} rating</label>
          
            <RestaurentCards {...props}/>
            
           </div>
        )
    }
    
}
export default RestaurentCards;