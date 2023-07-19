import React from "react";
import "./Collection.css";
import "../../styles.css";
import {recipeData} from "../../modules/recipes.js";
import {isMobile, isTablet, isDesktop} from "react-device-detect";

export default function Collection(){
    return(
        <div>
            <div className="head">
                <h1>List of Recipes</h1>
            </div>
            {/*isDesktop||*/isTablet?(
                [...recipeData].map((recipe,i)=>{
                    if(i%2==0){
                        return(
                        <div className="recipe-body" key={i}>
                            <div className="recipe-text">
                                <p>{recipe.name}</p>
                            </div>
                            <div className="recipe-image-box">
                                <img className="recipe-image" src={recipe.img}/>
                            </div>
                        </div>
                        )
                    } else{
                        return(
                            <div className="recipe-body" key={i}>
                                <div className="recipe-image-box">
                                    <img className="recipe-image" src={recipe.img}/>
                                </div>
                                <div className="recipe-text">
                                    <p>{recipe.name}</p>
                                </div>
                            </div>
                            )
                        }
                    }
                )
            ):(
                [...recipeData].map((recipe,i)=>{
                        return(
                        <div className="recipe-body-mobile" key={i}>
                            <div className="recipe-text">
                                <h2>{recipe.name}</h2>
                                <p>{recipe.description}</p>
                                <details>
                                    <ol>
                                        {[...recipe.ingredients].map((ingredient,j)=>{
                                            return(<div key={j}><li>{ingredient}</li></div>)
                                        })}
                                    </ol>
                                    <summary>Ingredients</summary>
                                </details>
                                <details>
                                    {[...recipe.steps].map((step,j)=>{
                                        return(
                                            //have to fix this as no show
                                            <div key={j}>
                                                <details>
                                                    {step}
                                                    <summary>Step {j}</summary>
                                                </details>
                                            </div>
                                        )
                                    })}
                                    <summary>Steps</summary>
                                </details>
                            </div>
                            <div className="recipe-image-box">
                                <img className="recipe-image" src={recipe.img}/>
                            </div>
                        </div>
                        )
                    }
                )
            )
            }
        </div>
    )
}