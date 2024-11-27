
"use client";
import { fetchMovies } from '../../../services/api';

export const fetchGenre = async () => {
  return fetchMovies('/movies/genre');
};
