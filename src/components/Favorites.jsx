export const Favorites = ({ favorites, deleteFavorites }) => {
  return (
    <div >
      <h2 className="text-2xl my-10 text-center text-white font-bold">Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-white">No hay favoritos todavía.</p>
      ) : (
        <ul className="grid mx-2 place-content-center  grid-cols-12 gap-2" >
          {favorites.map((favorite) => (
            <li className="shadow-xl p-2  bg-yellow-100 rounded-2xl" key={favorite.id}>
              <h2 className="text-sm font-semibold p-2">{favorite.name}</h2>
              <img className="w-full" src={favorite.image} alt={favorite.name} />
              <div className="flex justify-center">

              <button 
              onClick={() => deleteFavorites(favorite)}
              className="bg-red-600 text-white text-sm font-bold rounded-md p-1 text-center m-1">Borrar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
