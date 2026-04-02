import './App.css'
import CocktailsList from './components/CocktailsList'
import Filters from './components/Filters'
function App() {
  return(
    <div className="main">
      <Filters/>
      <CocktailsList/>
      {/* <CocktailsList></CocktailsList> */}
    </div>
  )
}

export default App
