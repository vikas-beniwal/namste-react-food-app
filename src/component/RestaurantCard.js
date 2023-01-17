import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, lastMileTravelString }) => {
    // console.log(props.restaurant.data, 'propssssss');
    // const {name, cloudinaryImageId, cuisines,lastMileTravelString} = restaurant.data    object destructuring pass restaurants.data values in the props
    return (
        <div className="card">
            {/* <img src={IMG_CDN_URL+props.restaurant.data?.cloudinaryImageId} />
        <h2>{props.restaurant.data?.name}</h2>
        <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
        <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4> */}

            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}
export default RestaurantCard;