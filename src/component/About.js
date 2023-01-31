import { Outlet } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";
import Profile from "./ProfileClass";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent - About constructor");
    }
    componentDidMount(){
        console.log("Parent - component did mount")
    }

   render(){return(
        <div>
            <h1>About us page</h1>
            <p>
                {""}
                This is the food app about us page
            </p>
            <ProfileComponent name={"vikas"} />
            <Profile name={"vikas Class"}/>

        </div>
    )
   }
}
export default About;