import React from 'react';

interface MovieProps {
  movie: {
    id: number;
    title: string;
    releaseDate: string;
    description?: string;
    duration?: string;
    [key: string]: any; 
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-lg flex flex-col bg-white hover:shadow-xl transition-shadow">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{movie.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{movie.releaseDate}</p>
      {movie.duration && <p className="text-xs text-gray-500 mb-4">Duración: {movie.duration}</p>}
      <p className="text-xs text-gray-800">{movie.description || 'Descripción no disponible'}</p>
    </div>
  );
};

export default MovieCard;
