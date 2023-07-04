import "./Navbar.css";
import React from "react";
import {Link} from "react-router-dom";

export default function Navbar () {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <Link to="/about" className="nav-item">
                    <li>About</li>
                </Link>
                <Link to="/collection" className="nav-item">
                    <li>Collection</li>
                </Link>
            </ul>
        </nav>
    )
}