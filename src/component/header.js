import { useState, useContext } from "react";
import Logo from "../assets/img/foodApp.jpg"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import {useSelector} from "react-redux";
import store from "../utils/store";


 
// const loggedInUser = () => {
//     // API call to authentication
//     return true;
// }

const Title = () => (
    <a href="/">
        <img className="h-24 pl-2 mix-blend-darken" alt="logo" src={Logo} />
    </a>

);

const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store=>store.cart.items);
    console.log(cartItems, "cartItems");

    return (
        <div className="flex justify-between  bg-amber-200 shadow-lg">
            <Title />
            <div className="nav-items ">
                <ul className="flex py-10">

                    <li className="px-2">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about"> About</Link>
                    </li>
                    <li className="px-2"><Link to="/contact"> Contact</Link></li>
                    <li className="px-2"><Link to="/instamart"> Instamart</Link></li>

                    <li className="px-2"><Link to="/cart"> Cart-{cartItems.length} items</Link></li>
                </ul>
            </div>
            <span className="p-10">{isOnline? "🟢" : "🔴"}</span>
            <span className="p-10 font-bold text-red-900">{user.name}</span>
            {
                (isLoggedIn ? (
                    <button onClick={() => { setIsLoggedIn(false) }}>Logout</button>
                ) : (
                    <button onClick={() => { setIsLoggedIn(true) }}>Login</button>)
                )}


        </div>
    )
}

export default HeaderComponent;