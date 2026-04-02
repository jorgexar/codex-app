import { useState } from "react";
import CocktailCard from "./CocktailCard";
import { cocktails } from "../data/cocktails";
function CocktailsList(){

    const [currentCocktails,setCurrentCocktails] = useState(cocktails)
    const [liked, setLiked] = useState([])
    function deleteCocktail(id){
        setCurrentCocktails(currentCocktails.filter(drink=> drink.id !== id))
    }
    return(
        <div className="cocktails-list">
            
                {currentCocktails.map((drink)=>
                    <CocktailCard key={drink.id} cocktail={drink} deleteButton={()=>{deleteCocktail(drink.id)}}/>
                )}
            
           {/* <CocktailCard cocktail={cocktails[5]}/> */}
        </div>
    )

}
export default CocktailsList