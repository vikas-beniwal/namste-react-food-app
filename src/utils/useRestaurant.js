import { useEffect, useState } from "react";
import { FETCHING_MENU_URL } from "../constant";


const useRestaurant = (resId)=>{
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        try{
        const data = await fetch(FETCHING_MENU_URL+resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data)
    }
        
        catch(err){
            console.log(err);
        }
 

}
return restaurant;

}

export default useRestaurant;
