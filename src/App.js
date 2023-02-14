import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/header";
import Body from "./component/Body";
import About from "./component/About";
import Footer from "./component/Footer";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/ProfileComponent";
import Shimmer from "./component/Shimmer";
import Contact from "./component/Contact";
import UserContext from "./utils/UserContext";
import{Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./component/Cart";


const Instamart = lazy(()=> import("./component/Instamart"));

const AppLayout  = () => {
    const[user, setUser] = useState({
        name:"vicky",
        email:"vicky@gmail.com",
    })
    return( 
        <Provider store = {store}>
        <UserContext.Provider value={{user:user}}>
            <HeaderComponent />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    </Provider>
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
                path:"/contact",
                element: <Contact />,
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path:"/instamart",
                element: (<Suspense fallback={<Shimmer />}><Instamart /> </Suspense>),
            },
            {
                path:"/cart",
                element: <Cart />,
            }

        ]
    }

 
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
