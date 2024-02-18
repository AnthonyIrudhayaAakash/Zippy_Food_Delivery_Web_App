import { useEffect, useState } from "react";
import logo from "../configs/media/food-logo-bg.png"
import { Link } from "react-router-dom";


const Header = () =>{
 
    const login ="Login";
    const logout = "Log-out"

    

    const [loginstate,setloginstate] = useState(login)

    const [count, setcount] = useState(1);
    
    
    useEffect(()=>{

        if(count%2===0){

            setloginstate(logout)
        }
        else{
  
            setloginstate(login);
        }

    },[count])
    

    return (
     <div className="header">
         <div className="header-container">
         <div className="logo-box">
             <img  className ="logo" src={logo} width="150"></img>
         </div>
 
         
 
         <div className="nav-links">
             <ul className="navlist">
                 <li><Link to="/" className="links">Home</Link></li>
                 <li>Cart</li>
                 <li>login</li>
                 <li><Link to="/about" className="links">About</Link></li>
                 <li><Link to="/contact" className="links">Contact Us</Link></li>
                 <button id="login-btn" onClick={()=>{
                    setcount(prevcount => prevcount+1)    
                     
                    console.log("log button clicked ", count)
                 }}   
                 >{loginstate}</button>
             </ul>
         </div>
         

         </div>
        
         
     </div>
     

  

     
    )
 }
 export default Header;