import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/header";
import Body from "./component/Body";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";


const Footer  = () =>(
    <h4>fffffffff</h4>
        
    );

const AppLayout  = () => {
    return( 
    <>
    <HeaderComponent />
    {/* <About />
    <Body />
     */}
    <Outlet />
    <Footer />
    </>
    );

}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/about",
                element:<About />        
            },
            {
                path:"/",
                element:<Body />        
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />,
            }

        ]
    }

 
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
