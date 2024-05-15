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
                
                <div className="filter-search-div flex justify-center items-center">
                    <div className="filter_btn_div hover-scale transition-all">
                        <button onClick={() => {
                            setfilterbutton(!filterbutton);
                        }} className={`w-4/5 flex items-center rounded-lg px-5 py-2 mx-2 my-2 focus:outline-none transition hover:scale-90 transform delay-75 ${
                            filterbutton
                                ? 'bg-white text-orange-500 border-2 border-orange-500' // Applied when button is clicked
                                : 'bg-orange-500 text-white' // Applied when button is not clicked
                        }`}>
                            Filter
                        </button>
                    </div>
                    


                    <div className="searchbar-container bg-slate-200 px-4 py-2 bg-gray-200 rounded-lg">
                        <div className="child-searchbar-div flex items-center">
                            <input className="searchinput p-2 outline-none bg-gray-200" placeholder="Search for restaurent" type="search" value={searchInput} onChange={
                                (event)=>{
                                    setsearchInput(event.target.value);
                                }
                            }></input>
                            <button className="search-btn cursor-pointer p-2 focus:outline-none" onClick={()=>{
                                console.log("button clicked")
                            }}><img src={searchicon} width="30" className="search-icon-png"></img></button>
        
                        </div>
                    </div>
                    
                </div>

                
                <Body searchdata={searchInput} filterbtnstatus={filterbutton}/>

            </div>
    )
}

export default Searchbody;