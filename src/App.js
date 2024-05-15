import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./Components/Header";
// import About from "./Components/About";
import Error from "./Components/Error";
// import Searchbody from "./Components/Searchbody";
// import RestaurentCards from "./Components/RestaurentCards";
// import RestaurentMenu from "./Components/RestaurentMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./configs/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./configs/appStore";
import Cart from "./Components/Cart";

const Search_body = lazy(()=>import("./Components/Searchbody"))
const About = lazy(()=>import("./Components/About"));
const Contact_us = lazy(()=>import("./Components/Contact_us"));
const RestaurentMenu = lazy(()=>import("./Components/RestaurentMenu"));




const root = ReactDOM.createRoot(document.getElementById("container"));
const MasterLayout = () =>{

    const {isLogin, userName, id, logState} = useContext(UserContext)
    const [log_Status, set_Log_Status] = useState(isLogin);
    const [log_State_Display_Name, set_Log_State_Display_Name] = useState(logState);
    const [user_Name, set_User_Name] = useState(userName);
    
    return (
        <div className="MasterContainer">
            <Provider store ={appStore}>
                <UserContext.Provider value = {{userName:user_Name, set_User_Name,isLogin:log_Status, set_Log_Status, logState:log_State_Display_Name, set_Log_State_Display_Name}}>
                    <Header/>
                    <Outlet/> 
                </UserContext.Provider>
            </Provider>
        </div>
    ); 
    
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout/>,
        children:[
            {
                path:"/",
                element:<Suspense fallback={<Shimmer/>}><Search_body/></Suspense>
            },
            {
                path:"/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense>,
            },
            {
                path:"/cart",
                element: <Suspense fallback={<Shimmer/>}><Cart/></Suspense>
            },
            {
                path:"/contact",
                element: <Suspense fallback={<Shimmer/>} ><Contact_us/></Suspense>
            },
            {
                path:"/restaurentmenu/:resid",
                element: <Suspense fallback={<Shimmer/>}><RestaurentMenu/></Suspense>
            }
        ],
        errorElement: <Error/>
    },

])




root.render(<RouterProvider router={AppRouter}/>);