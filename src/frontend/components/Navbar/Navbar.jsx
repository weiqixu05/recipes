import "./Navbar.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar () {
    const [isMobile, setIsMobile]=useState(false);
    return(
        <nav className={isMobile?"nav-mobile":"navbar"}>
            <ul className="nav-list">
                <Link to="/about" className="nav-item">
                    <li>About</li>
                </Link>
                <Link to="/collection" className="nav-item">
                    <li>Collection</li>
                </Link>
                <Link to="/search" className="nav-item">
                    <li>Search</li>
                </Link>
            </ul>
        </nav>
    )
}