function CocktailCard({cocktail,deleteButton}){

    return(
        <div className="card" key={cocktail.id}>
            <h1>{cocktail.name}</h1>
            <p>Base: {cocktail.baseSpirit}</p>
            <h4>Ingredients</h4>
            <ol>
                {cocktail.ingredients.map((ingredient,i)=><li key={i}>{ingredient}</li>)
                }
            </ol>
            <p>Flavor Profile : {cocktail.flavorProfile}</p>
            <button onClick={deleteButton}>Delete</button>
        </div>
    )

}

export default CocktailCard