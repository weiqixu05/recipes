import React from "react";
import "./Search.css";
import "../../styles.css";

export default function Search(){
    async function fetchData(){
        try{
            const data=((await fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=33eef802&app_key=8ebc6ae94cc66037076a9fd9c7e9c5fa")));
            console.log(data);
            console.log(await data.json());
        } catch (error){
            console.log(error);
        }
    }
    fetchData();
    return(
        <h1 className="h1">If you ran out of recipes....</h1>
    )
}
