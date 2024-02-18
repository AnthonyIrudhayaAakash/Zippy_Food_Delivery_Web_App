import { IMAGE_URL, NON_VEG_IMAGE_URL, ALT_FOOD_IMAGE } from "../configs/constants";
import Menu from "./Menu";
const Menu_category = (props) =>{
    
    let j=0
    const categories =props?.data?.card?.card?.categories || undefined ;
    // console.log("I'm category", categories)
    
    //console.log("menu arr", menu_array)
    
   
    if(categories===undefined){
        const menu_array = props?.data?.card?.card?.itemCards ||  [];
        
        return  (
            menu_array.map((menu)=>{

                const { name , price , description, imageId, defaultPrice, finalPrice, id } = menu?.card?.info || {};

                const { vegClassifier } = menu?.card?.info?.itemAttribute || {};
                const { isVeg } = menu?.card?.info || {};
                
                // console.log("classifier", vegClassifier);

                const menuprops = {name, price, description, imageId, defaultPrice, finalPrice}
                // console.log(props.btn_status);
                if(props.btn_status){
                   if(vegClassifier==="VEG" || isVeg===1){
                        return(
                                
                            <Menu {...menuprops} key={id}/>
                        )
                    
                   }
               }
               else if(!props.btn_status){
                    return(
                                
                        <Menu {...menuprops} key={id}/>
                    )
               }
            })
        )
    }
    else{
        return categories.map(()=>{
            
             
            // console.log("i:",j)
            const menu_array =  props?.data?.card?.card?.categories?.[j]?.itemCards || {};
            j++
           return menu_array.map((menu)=>{
                // console.log("menucat",menu)
                const { name,price, description, imageId , defaultPrice, finalPrice, id} = menu?.card?.info || {};
                const menuprops = {name, price, description, imageId, defaultPrice, finalPrice}

                const { vegClassifier } = menu?.card?.info?.itemAttribute || {};
                const { isVeg } = menu?.card?.info || {};

                const veg_props = { vegClassifier, isVeg}
                // console.log("classifier", vegClassifier);
                
                if(props.btn_status){
                    if(vegClassifier==="VEG" || isVeg===1){
                        return(
                            
                            <Menu {...menuprops} {...veg_props} key={id}/>
                        )
                    }
               }
               else if(!props.btn_status){
                    return(
                                
                        <Menu {...menuprops} {...veg_props} key={id}/>
                    )
               }
            })

        })

    }
}
export default Menu_category;