import { useState } from "react";
import { cocktails } from "../data/cocktails";
import FilterBox from "./FilterBox";
// const initFilters = {
//   name: "",
//   base: "",
//   ingredients: [],
//   strength: "",
// };

// Unique values for filtering
const names = cocktails.map((drink) => drink.name);
const bases = [...new Set(cocktails.map((drink) => drink.baseSpirit))];
const ingredients = [
  ...new Set(cocktails.flatMap((drink) => drink.ingredients)),
];
const flavorProfiles = [
  ...new Set(cocktails.flatMap((drink) => drink.flavorProfile)),
];
const strength = [...new Set(cocktails.map((drink) => drink.strength))];

function Filters() {
//   const [activeFilters, setActiveFilters] = useState(initFilters);
   
  return (
    <div className="filters">
        <h1>Filters</h1>
        <FilterBox categoryName="Names" values={names}></FilterBox>
        <FilterBox categoryName="Base spirits" values={bases}></FilterBox>
        <FilterBox categoryName="Ingredients" values={ingredients}></FilterBox>
        
    </div>
  );
}

export default Filters
