import { useEffect, useState } from 'react';
import { Characters } from './components/Characters';
import { Favorites } from './components/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [favorites, setFavorites] = useState([])
  const API = `https://rickandmortyapi.com/api/character?page=${page}`;

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results); 
        setTotalPages(data.info.pages); 
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [page]); 

  // Función para agregar a favoritos
  const addToFavorites = (character) => {
    // Evitar duplicados
    if (!favorites.find((fav) => fav.id === character.id)) {
      setFavorites([...favorites, character]);
    }
  };

  const deleteFavorites = (character) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(fav => fav.id !== character.id)
    );
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1); 
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1); 
  };

  return (
    <div 
    className=" bg-fixed  bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url('/estrellas.jpg')` }}>
    {/* Contenido de tu página aquí */}
      <h1 className='text-center text-3xl text-white pt-5 font-black'>Rick and Morty Personajes</h1>

      <Favorites
        favorites={favorites}
        deleteFavorites={deleteFavorites}

      />

      <div className='flex justify-center mt-10'>
        <button className='px-4 bg-slate-300 rounded-md font-semibold' onClick={handlePrevious} disabled={page === 1}>
          Atras
        </button>
        <span className='mx-3 text-white p-3 font-semibold'> Página {page} de {totalPages}</span>
        <button className='px-4 bg-slate-300 rounded-md font-semibold' onClick={handleNext} disabled={page === totalPages}>
          Siguiente
        </button>
      </div>
      <div className='p-32'>

        <Characters
          characters={characters}
          addToFavorites={addToFavorites}
        />

      </div>
      <div className='flex justify-center pb-10'>
        <button className='px-4 bg-slate-300 rounded-md font-semibold' onClick={handlePrevious} disabled={page === 1}>
          Atras
        </button>
        <span className='px-3 text-white font-semibold'> Página {page} de {totalPages}</span>
        <button className='px-4 bg-slate-300 rounded-md font-semibold' onClick={handleNext} disabled={page === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App;
