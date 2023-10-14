import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export function PokemonData() {
    const { pokemon } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [pokemon]);

    return (
        <div className="container">
            <NavLink to="/pokemons" className="btn btn-primary mb-3">Volver</NavLink>

            {data && <div className="card pokemon">
                <div className="card-body d-flex flex-column align-items-center">
                    <div className="card-image">
                        <img src={ data.sprites.front_default } alt={ pokemon } />
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>{ pokemon }</strong></li>
                        { data.stats.map(stat => (
                            <li className="list-group-item">
                                { stat.stat.name }: { stat.base_stat }
                            </li>
                         ))}
                    </ul>
                </div>
            </div>}
        </div>
    )
}