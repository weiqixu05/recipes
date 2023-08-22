import React from "react";
import "./Search.css";
import "../../styles.css";
import {useState} from "react";


var query="pizza";
var hitNumber=0;
var max=0;
var count=0;
export default function Search(){
    const [recipeLink, setRecipeLink]=useState("");
    async function fetchData(query, hitNumber){
        try{
            const response=((await fetch("https://api.edamam.com/api/recipes/v2?type=public&q="+query+"&app_id=33eef802&app_key=8ebc6ae94cc66037076a9fd9c7e9c5fa")));
            const data=await response.json();
            //console.log(hitNumber);
            if((hitNumber>data.count-1)&&data.count!=0){
                hitNumber=data.count-1;
            } else if(data.count==0){
                setRecipeLink("No Recipes Found");
            }
            else{setRecipeLink(data.hits[hitNumber].recipe.url);}
            //console.log(hitNumber);
            //console.log(data.count);
            //console.log(recipeLink);
        } catch (error){
            console.log(error);
        } 
    }
    fetchData(query, hitNumber);
    return(
        <div>
            <div className="head">
                <h1 className>If you ran out of recipes....</h1>
            </div>
            <div>
                <p>
                    {recipeLink}
                </p>    
                <button onClick={() =>{
                        query="dumplings";
                        fetchData(query, hitNumber);
                    }}
                >
                    Change recipe
                </button>
                {/*update this part for user input using form*/}
                <input name="search" id="search" type="text"/>
                <button onClick={()=>{
                        query=document.getElementById('search').value;
                        max=20;
                        hitNumber=Math.floor(Math.random()*max);
                        //console.log(hitNumber);
                        fetchData(query, hitNumber);
                    }}
                >
                    Random Recipe
                </button>
            </div>
        </div>
    )
}
