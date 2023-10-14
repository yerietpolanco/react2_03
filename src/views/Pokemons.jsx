import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Pokemons() {
  const [pokemons, setPokemons] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((data) => setPokemons(data.data));
  }, []);

  const selectPokemon = () => {
    if (!pokemon) return;
    navigate("/pokemons/" + pokemon)
  }

  return (
    <div className="container">
      <h1>Pokemons</h1>

      {pokemons && (
        <div className="pokemons">
          <p>Selecciona un pokemon para ver sus datos</p>
          <div className="mb-3">
            <select
              name="pokemon"
              id="pokemon"
              className="form-select"
              onChange={(e) => setPokemon(e.target.value)}
            >
              <option value="" disabled selected>Seleccionar pokemon</option>
              {pokemons.results.map((pokemon, k) => (
                <option key={k} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
            </select>
          </div>
          <button
              className="btn btn-primary"
              onClick={selectPokemon}
            >
              Ver detalle
            </button>
        </div>
      )}
    </div>
  );
}
