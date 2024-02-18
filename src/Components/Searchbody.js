import searchicon from "../configs/media/searchicon.png"
import Body from "./Body";
import Food_Carousal from "./Food_Carousal";
import { useState, useEffect } from "react";
const Searchbody = () =>{
    const [searchInput, setsearchInput] = useState("");
    // const [food_data, setfood_data] = useState([]);

    const [filterbutton, setfilterbutton]= useState(false);

    return(
        <div className="filter-search-body-div">
                <div className="filter-search-div">
                    <div className="btn-container">  

                        <button onClick={() => {
                            if(filterbutton){
                                setfilterbutton(false);
                            }
                            else{
                                setfilterbutton(true);
                            }
                        }} className="Filter-btn" >Filter</button>

                    </div>

                    <div className="searchbar-container">
                        <div className="child-searchbar-div">
                            <input className="searchinput" placeholder="Search for restaurent" type="search" value={searchInput} onChange={
                                (event)=>{
                                    setsearchInput(event.target.value);
                                }
                            }></input>
                            <button className="search-btn" onClick={()=>{
                                console.log("button clicked")
                            }}><img src={searchicon} width="30" className="search-icon-png" aria-label="Search"></img></button>
        
                        </div>
                    </div>
                    
                </div>

                
                <Body searchdata={searchInput} filterbtnstatus={filterbutton}/>

            </div>
    )
}

export default Searchbody;