import React, {useState} from "react";
import "./Collection.css";
import "../../styles.css";
import {recipeData} from "../../modules/recipes.js";

export default function Collection(){
    const [imagePos, setImagePos]=useState('r');
    const something=recipeData[0].name;
    return(
        <div>
            <div className="head">
                <h1>List of Recipes</h1>
                <h2>{something}</h2>
            </div>
            {
                [...recipeData].map((recipe,i)=>{
                    if(i%2==0){
                        return(
                        <div className="recipe-body" key={i}>
                            <div className="recipe-text">
                                <p>{recipe.name}</p>
                            </div>
                            <div className="recipe-image">
                                <p>goodbye world</p>
                            </div>
                        </div>
                        )
                    } else{
                        return(
                            <div className="recipe-body" key={i}>
                                <div className="recipe-image">
                                    <p>hello world</p>
                                </div>
                                <div className="recipe-text">
                                    <p>{recipe.name}</p>
                                </div>
                            </div>
                            )
                        }
                    }
                )
            }
        </div>
    )
}