"use client";

import { useEffect, useState } from "react";
import { fetchMovies } from '../../../movies/src/app/services/api';

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const moviesPerPage =12;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies('/movies');
        setMovies(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching movies:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };

    getMovies();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-8 pb-20 gap-8 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Lista de Películas</h1>
        <input
          type="text"
          placeholder="Buscar películas..."
          className="p-2 border border-gray-300 rounded-lg shadow-sm w-full sm:w-1/2 md:w-1/3 text-black"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {currentMovies.map((movie, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg bg-white flex flex-col hover:shadow-xl transition-shadow">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">{movie.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{movie.releaseDate}</p>
            <p className="text-xs text-gray-800 truncate">{movie.description || 'Descripción no disponible'}</p>
          </div>
        ))}
      </main>
      <footer className="mt-8 flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
        &lt;- Anterior
        </button>
        <span className="text-gray-700">Página {currentPage} de {totalPages}</span>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente -&gt;
        </button>
      </footer>
    </div>
  );
}
