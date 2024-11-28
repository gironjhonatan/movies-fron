import React from 'react';

interface MovieProps {
  movie: {
    id: number;
    title: string;
    duration?: string;
    [key: string]: any; 
    posterImage: string;
    contentRating: string;
    storyline: string;
    year: string;
    genres: string[];
    ratings: string[];
    actors: string[];
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-lg flex flex-col bg-white hover:shadow-xl transition-shadow">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{movie.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{movie.releaseDate}</p>
      {movie.duration && <p className="text-xs text-gray-500 mb-4">Duración: {movie.duration}</p>}
      <p className="text-xs text-gray-800">{movie.genres}</p>
    </div>
  );
};

export default MovieCard;
