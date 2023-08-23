import React from "react";
import "./Search.css";
import "../../styles.css";
import {useState} from "react";

export default function Search(){
    const [query, setQuery]=useState("pizza");
    const [recipeLink, setRecipeLink]=useState("");
    const [hitNumber, setHitNumber]=useState(3);
    async function fetchData(query){
        try{
            const response=((await fetch("https://api.edamam.com/api/recipes/v2?type=public&q="+query+"&app_id=33eef802&app_key=8ebc6ae94cc66037076a9fd9c7e9c5fa")));
            const data=await response.json();
            //console.log(data.count);
            if(data.count!=0&&data.count<20){
                setHitNumber(Math.floor(Math.random()*data.count));
                setRecipeLink(data.hits[hitNumber].recipe.url);
            } else if(data.count!=0&data.count>=20){
                setHitNumber(Math.floor(Math.random()*20));
                console.log(hitNumber);
                setRecipeLink(data.hits[hitNumber].recipe.url);
            } else if(data.count==0){
                setRecipeLink("No Recipes Found for\"" + query + "\"");
            }
            //console.log(hitNumber);
            //console.log(query);
            //console.log(recipeLink);
        } catch (error){
            console.log(error);
        } 
    }
    return(
        <div>
            <div className="head">
                <h1 className>If you ran out of recipes....</h1>
            </div>
            <div>
                <p>
                    {recipeLink}
                </p>    
                {/*update this part for user input using form*/}
                <input name="search" id="search" type="text"/>
                <button onClick={()=>{
                        setQuery(document.getElementById('search').value);
                        //console.log(query);
                        fetchData(query);
                    }}
                >
                    Random Recipe
                </button>
            </div>
        </div>
    )
}
