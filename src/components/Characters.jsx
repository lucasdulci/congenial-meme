
export const Characters = ({ characters, addToFavorites }) => {

    return (
        <ul className="grid grid-cols-3 gap-20">
            {characters.map((character) => (
                <li className="shadow-lg bg-white/15 text-white rounded-2xl p-2" key={character.id}>
                    <h2 className="text-lg font-semibold">Nombre: {character.name}</h2>
                    <p> Especie: {character.species}</p>
                    <img className="w-full" src={character.image} alt={character.name} />
                    <div className="flex justify-center">
                        <button
                        onClick={() => addToFavorites(character)} 
                        className="p-2 m-2 text-sm font-semibold rounded-xl text-slate-100 bg-purple-600 hover:bg-purple-500">
                            Agregar a favoritos
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
