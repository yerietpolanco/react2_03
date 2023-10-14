import { Nav } from './components/Nav'
import { Route, Routes } from "react-router-dom";
import { Home } from './views/Home';
import { Pokemons } from './views/Pokemons';
import { PokemonData } from './views/PokemonData';


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemons" element={<Pokemons/>} />
        <Route path="/pokemons/:pokemon" element={<PokemonData/>} />
      </Routes>
    </>
  )
}

export default App
