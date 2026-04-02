import { useState } from "react";
import CocktailCard from "./CocktailCard";
import { cocktails } from "../data/cocktails";
function CocktailsList(){

    const [currentCocktails,setCurrentCocktails] = useState(cocktails)
    const [liked, setLiked] = useState([])
    function deleteCocktail(id){
        setCurrentCocktails(currentCocktails.filter(drink=> drink.id !== id))
    }
    function handleLike(id){
        console.log(liked)
        if(!liked.includes(id)){
            setLiked([...liked,id])
            return
        }
        setLiked(liked.filter(storedId => storedId !== id ))
    }
    return(
        <div className="cocktails-list">
            
                {currentCocktails.map((drink)=>
                    <CocktailCard key={drink.id} 
                    cocktail={drink} 
                    isLiked={liked.includes(drink.id)} 
                    likeButton={()=>{handleLike(drink.id)}}
                     deleteButton={()=>{deleteCocktail(drink.id)}}/>
                )}
            
           {/* <CocktailCard cocktail={cocktails[5]}/> */}
        </div>
    )

}
export default CocktailsList