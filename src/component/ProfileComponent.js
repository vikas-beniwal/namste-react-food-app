import { useState, useEffect } from "react";

const ProfileComponent = (props)=>{
    const[count, setCount]=useState(0);
    useEffect(()=>{
        //API call
        console.log("useEfrfect profile component");
    })
    console.log("render profile compnent");

    return(
        <div>
           <h2>Profile function component</h2> 
           <h3>name : {props.name}</h3>
           <h3>count : {count}</h3>
           <button onClick={()=>setCount(count+1)}>click me</button>

            </div>
    )
}

export default ProfileComponent;