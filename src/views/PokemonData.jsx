import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            {data && <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ pokemon }</h5>
                    <p className="card-text"></p>
                    <div className="card-image">
                        <img src={ data.sprites.front_default } alt={ pokemon } />
                    </div>

                    <ul className="list-group list-group-flush">
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