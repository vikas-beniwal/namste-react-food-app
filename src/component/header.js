import { useState } from "react";
import Logo from "../assets/img/foodApp.jpg"
import { Link } from "react-router-dom";
const loggedInUser = () => {
    // API call to authentication
    return true;
}

const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" src={Logo} />
    </a>

);

const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>

                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
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