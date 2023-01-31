import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import { CircleFill, CurrencyRupee } from "react-bootstrap-icons";
import imageNotFound from "../assets/img/noimage.jpg";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurant = useRestaurant(resId);

    return (!restaurant) ? <Shimmer /> :(
        <div className="restaurant-card">
            <div className="restaurant-deatils">
                <div className="restaurant-img">
                    <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                </div>
                <div className="restaurant-info">
                {/* <h3  style={{ fontWeight: "bold" }}>Restaurant id: {resId}</h3> */}
                    <h3  style={{ fontWeight: "bold" }}>{restaurant.name}</h3>
                    <span><h4>
                        {restaurant.cuisines.join(", ")}</h4></span>
                    <span><h4>{restaurant.area} , {restaurant.city}</h4></span>
                    <span className="rating-cost">
                        <div className="rating">{restaurant.avgRating} stars</div>
                        <div className="cost">{restaurant.costForTwoMsg}</div>
                    </span>
                    
                </div>
            </div>
            <div className="menu">
                    
                <h1>Menu{
                    console.log(Object.values(restaurant?.menu?.items))
                    }</h1>

                     {
                         
                     Object.values(restaurant?.menu?.items)
                     .map((item, index) => (
                        //  <li key={item.id} className="menu-item">{item.name}</li>
                        <div
            key={index}
            className="menu-list"
          >
            <div className="menu-item">
              
              <div className="item-deatils">
                <div className="item-type-name">
                    {item.isVeg === 1 ? (
                    <CircleFill className="text-success" height={10} width={10} />
                    ) : (
                    <CircleFill className="text-danger" height={10} width={10} />
                    )}&nbsp;&nbsp;&nbsp;
                    {item?.name}
                </div>
                <div className="cost"><CurrencyRupee /> {item?.price?(item?.price)/100:((item?.defaultPrice)/100)}</div>
                <div className="item-description">{item?.description}</div>
            </div>
            <div className="item-image">
              {item.cloudinaryImageId ? (
                <img
                  alt={item?.name}
                  src={IMG_CDN_URL + item?.cloudinaryImageId
                  }
                />
              ) : <img  alt="not found" src={imageNotFound}/>}
            </div>
            </div>

          </div>
                     ))
                } 
    
            </div>
        </div>
    )
};

export default RestaurantMenu;