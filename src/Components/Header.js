import React, { useContext, useState } from "react";
import logo from "../configs/media/food-logo-bg.png";
import { Link } from "react-router-dom";
import UserContext from "../configs/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const { userName,set_User_Name, isLogin, id, set_Log_Status, logState, set_Log_State_Display_Name } = useContext(UserContext);
    const [check, setCheck] = useState(isLogin);

    const cartItems = useSelector((store)=> store.cart.items )

    // console.log(userName, isLogin)
    return (
        <div className="header grid justify-items-center place-items-center sm:block drop-shadow-2xl">
            <div className="grid grid-rows-2 justify-items-center place-items-center sm:flex justify-between items-center">
                <div className="logo-box">
                    <img className="logo w-32 sm:w-40 md:w-48" src={logo} alt="Logo" />
                </div>

                <div className="nav-links">
                    <ul className="group flex justify-around px-4 items-center sm:px-8">
                        <li className="nav-item px-2 py-1 text-xs sm:px-5 py-2 sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                            <Link to="/">Home</Link>
                        </li>
                        {/* <svg className="_1GTCc _2MSid border-2 border-orange-500" viewBox="-1 0 37 32" height="20" width="20"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg> */}
                        {/* <li className="">
                        <svg className="_1GTCc _2MSid border-2 border-orange-500" viewBox="-1 0 37 32" height="20" width="20"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                        <span class="value">0</span>
                        </li> */}
                        <li className="nav-item px-2 py-1 text-xs sm:px-5 py-2 sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                            <Link to="/cart" className="cart">Cart({cartItems.length})</Link>
                        </li>
                        <li className="nav-item px-2 py-1 text-xs sm:px-5 py-2 sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                            <Link to="/about" className="links">About</Link>
                        </li>
                        <li className="nav-item px-2 py-1 text-xs sm:px-5 py-2 sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                            <Link to="/contact" className="links">Contact Us</Link>
                        </li>     
                            <button
                                className="login-btn nav-item bg-orange-500 text-white px-2 py-1 rounded-lg focus:outline-none hover:scale-110 transition-all sm:px-5 py-2"
                                onClick={() => {
                                
                                    {
                                        
                                        set_Log_Status(!isLogin)// Toggle the login state
                                        //The following line toggle the login button , it display "Sign In" when user is not signed in and it display their username when logged in , Till now for sample there is only one name but for further developement depends on providing user name it will toggle
                                        isLogin ? set_Log_State_Display_Name("Sign In") : set_Log_State_Display_Name("Anthony")
                                        isLogin ? set_User_Name("Foodie"): set_User_Name("Anthony")
                                        { console.log(isLogin,userName,logState, "gushusis") }
                                    }
                                
                                }}
                            >
                                {logState}
                            </button>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
