import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/header";
import Body from "./component/Body";
import About from "./component/About";
import Footer from "./component/Footer";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/ProfileComponent";




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
                element:<About />,
                children:[
                    {
                        path:"profile",
                        element: <Profile />
                    }
                ]        
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
