import React from "react";
import "./Search.css";
import "../../styles.css";
import {useState} from "react";


var query="pizza";
export default function Search(){
    const [recipeLink, setRecipeLink]=useState("");
    async function fetchData(query){
        try{
            const response=((await fetch("https://api.edamam.com/api/recipes/v2?type=public&q="+query+"&app_id=33eef802&app_key=8ebc6ae94cc66037076a9fd9c7e9c5fa")));
            const data=await response.json();
            setRecipeLink(data.hits[0].recipe.url);
            console.log(recipeLink);
        } catch (error){
            console.log(error);
        } 
    }
    fetchData(query);
    return(
        <div>
            <h1 className="h1">If you ran out of recipes....</h1>
            <p>
                {recipeLink}
            </p>
                <button onClick={() =>{
                        query="dumplings";
                        fetchData(query);
                    }}
                >
                    Change recipe
                </button>
        </div>
    )
}
