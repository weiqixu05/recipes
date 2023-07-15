import "./Navbar.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {isMobile, isTablet, isDesktop} from "react-device-detect";

export default function Navbar () {
    const [isPressed, setIsPressed]=useState(false);
    return(
        <div>
        {((isMobile&&isPressed&&!isTablet)||(isDesktop||isTablet))?(
        <nav className={isMobile&&!isTablet?"nav-mobile":"navbar"}>
            <ul className={isMobile&&!isTablet?"nav-list-mobile":"nav-list"} onClick={()=>{setIsPressed(!isPressed)}}>
                <Link to="/about" className={isMobile&&!isTablet?"nav-item-mobile":"nav-item"}>
                    <li>About</li>
                </Link>
                <Link to="/collection" className={isMobile&&!isTablet?"nav-item-mobile":"nav-item"}>
                    <li>Collection</li>
                </Link>
                <Link to="/search" className={isMobile&&!isTablet?"nav-item-mobile":"nav-item"}>
                    <li>Search</li>
                </Link>
            </ul>
        </nav>):(<div></div>)
    }   {isMobile&&!isTablet?
        (<div className="nav-mobile-header">
            <div className="nav-button">
                <button onClick={()=>{setIsPressed(!isPressed);}}>
                    {(isPressed?<div>X</div>:<div>☰</div>)}
                </button>
            </div>
        </div>)
            :(<div></div>)
        } 
        </div>
    )
}