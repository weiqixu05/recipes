import React, {useState} from "react";
import "./Collection.css";
import "../../styles.css";
import {recipeData} from "../../modules/recipes.js";

export default function Collection(){
    const [imagePos, setImagePos]=useState('r');
    const something=recipeData[0].name;
    const[i,setI]=useState(true);
    return(
        <div>
            <div className="head">
                <h1>List of Recipes</h1>
                <h2>{something}</h2>
            </div>
            {
                [...recipeData].map(()=>{
                    return(
                    <div className="recipe-body">
                        <div className={i==true?"recipe-text":"recipe-image"}>
                            <p>hello world</p>
                        </div>
                        <div className={i==true?"recipe-image":"recipe-text"}>
                            <p>goodbye world</p>
                        </div>
                    </div>
                    )
                    }
                )
            }
        </div>
    )
}