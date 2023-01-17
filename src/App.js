import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/header";
import Body from "./component/Body";

const Footer  = () =>(
    <h4>fffffffff</h4>
        
    );

const AppLayout  = () => {
    return( 
    <>
    <HeaderComponent />
    <Body />
    <Footer />
    </>
    );

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
