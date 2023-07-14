import React, {useState} from "react";
import "./Collection.css";
import "../../styles.css";

export default function Collection(){
    const [imagePos, setImagePos]=useState('r');
    return(
        <div>
            <div className="head">
                <h1>List of Recipes</h1>
            </div>
            <div className="recipe-body">
                <div className={imagePos=='r'?"recipe-text":"recipe-image"}>
                    {imagePos=='r'?setImagePos=='l':setImagePos=='r'}
                    <p>hello world</p>
                </div>
                <div className={imagePos=='r'?"recipe-image":"recipe-text"}>
                    <p>goodbye world</p>
                </div>
            </div>
        </div>
    )
}