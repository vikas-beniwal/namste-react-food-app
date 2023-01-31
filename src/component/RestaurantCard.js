import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({  name, cuisines, cloudinaryImageId, lastMileTravelString, costForTwoString, avgRating }) => {
    console.log(this, 'props');
    // console.log(props.restaurant.data, 'propssssss');
    // const {name, cloudinaryImageId, cuisines,lastMileTravelString} = restaurant.data    object destructuring pass restaurants.data values in the props
    return (
        <div className="card">
            {/* <img src={IMG_CDN_URL+props.restaurant.data?.cloudinaryImageId} />
        <h2>{props.restaurant.data?.name}</h2>
        <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
        <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4> */}

            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3 className="normal-text">{name}</h3>
            <p class="normal-text small-text card-text">{cuisines.join(", ")}</p>
            <div className="raating-cost-distance">
                <div className="distance">{
                                parseFloat(avgRating) >= 4 ?
                                    <div className='star-bg-positive' style={{ width: '40px' }}>
                                        <i className="star"></i>
                                        <span>{avgRating}</span>
                                    </div>
                                    :
                                    <div className='star-bg-negative' style={{ width: '40px' }}>
                                        <i className="star"></i>
                                        <span>{avgRating}</span>
                                    </div>} </div>
                <div className="distance normal-text small-text card-text">{lastMileTravelString} </div>
                <div className="costForTwo normal-text small-text card-text">{costForTwoString} </div>
                </div>
        </div>
    )
}
export default RestaurantCard;