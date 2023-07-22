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
            {isDesktop||isTablet?(
                [...recipeData].map((recipe,i)=>{
                    if(i%2==0){
                        return(
                        <div className="recipe-body" key={i}>
                            <div className="recipe-text">
                                <h2 className="align-left">{recipe.name}</h2>
                                <p className="align-left">{recipe.description}</p>
                                <details className="recipe-dropdown">
                                    <summary>Ingredients</summary>
                                    <ul>
                                    {[...recipe.ingredients].map((ingredient,j)=>{
                                        return(<li key={j}>{ingredient}</li>)
                                    })}
                                    </ul>
                                </details>
                                <details className="recipe-dropdown">
                                    {[...recipe.steps].map((step,j)=>{
                                        return(
                                            <div key={j}>
                                                <details className="recipe-second-drop">
                                                    {step}
                                                    <summary>Step {j}</summary>
                                                </details>
                                            </div>
                                        )
                                    })}
                                    <summary>Steps</summary>
                                </details>
                                <details className="recipe-dropdown">
                                    {[...recipe.nutrition].map((nutrient, j)=>{
                                        return(
                                            <div key={j} className="recipe-second-drop">
                                                {nutrient}
                                            </div>
                                        )
                                    })}
                                    <summary>Nutrition Facts</summary>
                                </details>
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
                                    <h2 className="align-right">{recipe.name}</h2>
                                    <p className="align-right">{recipe.description}</p>
                                    <details className="recipe-dropdown">
                                        <ul>
                                        {[...recipe.ingredients].map((ingredient,j)=>{
                                            return(<li key={j}>{ingredient}</li>)
                                        })}
                                        </ul>
                                    <summary>Ingredients</summary>
                                </details>
                                <details className="recipe-dropdown">
                                    {[...recipe.steps].map((step,j)=>{
                                        return(
                                            <div key={j}>
                                                <details className="recipe-second-drop">
                                                    {step}
                                                    <summary>Step {j}</summary>
                                                </details>
                                            </div>
                                        )
                                    })}
                                    <summary>Steps</summary>
                                </details>
                                <details className="recipe-dropdown">
                                    {[...recipe.nutrition].map((nutrient, j)=>{
                                        return(
                                            <div key={j} className="recipe-second-drop">
                                                {nutrient}
                                            </div>
                                        )
                                    })}
                                    <summary>Nutrition Facts</summary>
                                </details>
                                </div>
                            </div>
                            )
                        }
                    }
                )
            ):( //mobile
                [...recipeData].map((recipe,i)=>{
                        return(
                        <div className="recipe-body-mobile" key={i}>
                            <div className="recipe-text-mobile">
                                <h2>{recipe.name}</h2>
                                <p>{recipe.description}</p>
                                <details className="recipe-dropdown-mobile">
                                        {[...recipe.ingredients].map((ingredient,j)=>{
                                            return(<div key={j} className="recipe-list-item-mobile">{ingredient}</div>)
                                        })}
                                    <summary>Ingredients</summary>
                                </details>
                                <details className="recipe-dropdown-mobile">
                                    {[...recipe.steps].map((step,j)=>{
                                        return(
                                            <div key={j}>
                                                <details className="recipe-second-drop-mobile">
                                                    {step}
                                                    <summary>Step {j}</summary>
                                                </details>
                                            </div>
                                        )
                                    })}
                                    <summary>Steps</summary>
                                </details>
                                <details className="recipe-dropdown-mobile">
                                    {[...recipe.nutrition].map((nutrient, j)=>{
                                        return(
                                            <div key={j} className="recipe-second-drop-mobile">
                                                {nutrient}
                                            </div>
                                        )
                                    })}
                                    <summary>Nutrition Facts</summary>
                                </details>
                            </div>
                            <div className="recipe-image-box-mobile">
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