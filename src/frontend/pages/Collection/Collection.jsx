import React, {useState} from "react";
import "./Collection.css";
import "../../styles.css";
import {recipeData} from "../../modules/recipes.js";

export default function Collection(){
    return(
        <div>
            <div className="head">
                <h1>List of Recipes</h1>
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