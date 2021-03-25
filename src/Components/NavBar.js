import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div className="nav-wrapper">
            <div className="nav-left">
                <h2>Github Cards</h2>
            </div>
            <div className="nav-right">
                <ul className="nav-button-container">
                    <li className="nav-button">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="nav-button">
                        <Link to={"/users"}>Users</Link>
                    </li>
                    <li className="nav-button">
                        <Link to={"/user_details"}>UserDetails</Link>
                    </li>
                </ul>
            </div>
           
        </div>
    )
}

export default NavBar;