import React from 'react';
import MovieCard from '../../components/MovieCard';

interface Movie {
  id: number;
  title: string;
  [key: string]: any; 
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
