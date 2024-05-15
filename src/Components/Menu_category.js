import { IMAGE_URL, NON_VEG_IMAGE_URL, ALT_FOOD_IMAGE } from "../configs/constants";
import Menu from "./Menu";
const Menu_category = (props) =>{
    console.log("menu array", props)
    let j=0
    const categories =props?.data?.card?.card?.categories || undefined ;
    // console.log("I'm category", categories)
    
    const menu_array = props?.data?.card?.card?.itemCards ||  [];
        
        return  (
            menu_array.map((menu)=>{

                const { name , price , description, imageId, defaultPrice, finalPrice, id } = menu?.card?.info || {};

                const { vegClassifier } = menu?.card?.info?.itemAttribute || {};
                const { isVeg } = menu?.card?.info || {};
                
                // console.log("classifier", vegClassifier);

                const menuprops = {name, price, description, imageId, defaultPrice, finalPrice, isVeg , vegClassifier}
                // console.log(props.btn_status);
                if(props.btn_status){
                   if(vegClassifier==="VEG" || isVeg===1){
                        return(
                                
                            <Menu {...menuprops} menu={menu} key={id}/>
                        )
                    
                   }
               }
               else if(!props.btn_status){
                    return(
                                
                        <Menu {...menuprops} menu={menu} key={id}/>
                    )
               }
            })
        )
}
export default Menu_category;