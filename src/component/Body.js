import { useEffect, useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import {filterData} from "../utils/helper.js";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurant()
    }, []);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.451821747784624&lng=77.05156523734331&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        console.log(json?.data?.cards[2]?.data?.data?.cards, '111111111111111111');
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if(!isOnline){
        return <h1>Offline please check your internet connection</h1>
    }

            // not render component  ( Early Return)
    if(!allRestaurants) return null;

    return (allRestaurants.length ===0)?( <Shimmer/ >):(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value ={searchInput}
            onChange ={(e) => {setSearchInput(e.target.value)}} />

            <button className="search-btn" onClick={()=>{
                const data =filterData(searchInput, allRestaurants) 
                setfilteredRestaurants(data)}}
                >Search</button>
        </div>
            <div className="restaurants-list">
            { 
               filteredRestaurants.length === 0?( <><h2 style={{color:"red"}}>No data found</h2><Shimmer/ ></>):
                filteredRestaurants.map(restaurant => {
                    return (<Link style={{textDecoration:"none"}}to ={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
                        <RestaurantCard restaurant {...restaurant.data} key={restaurant.data.id} />
                        </Link>
                )})
            }
            {/* <RestaurantCard restaurant  {...restaurantList[0].data} />
        <RestaurantCard restaurant  {...restaurantList[1].data} />
        <RestaurantCard restaurant  {...restaurantList[2].data} />
        <RestaurantCard restaurant  {...restaurantList[3].data} />
        <RestaurantCard restaurant  {...restaurantList[4].data} />
        <RestaurantCard restaurant  {...restaurantList[5].data} />
        <RestaurantCard restaurant  {...restaurantList[6].data} />
        <RestaurantCard restaurant  {...restaurantList[7].data} /> */}

        </div>
        
        </>
        
    )
}

export default Body;