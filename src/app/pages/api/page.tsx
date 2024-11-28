import React from 'react';
import MovieCard from '../../components/MovieCard';

interface Movie {
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
