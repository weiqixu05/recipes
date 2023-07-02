import "./Navbar.css";
import React from "react";
import {Link} from "react-router-dom";

export default function Navbar () {
    return(
        <nav>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/collection">
                    <li>Collection</li>
                </Link>
            </ul>
        </nav>
    )
}