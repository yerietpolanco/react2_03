import greninja from '../assets/img/greninja.webp'

export function Home() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1>Bienvenido maestro Pokémon</h1>

            <img src={greninja} className="w-50" alt="" />
        </div>
    )
}