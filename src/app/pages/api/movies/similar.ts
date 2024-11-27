"use client";
import { fetchMovies } from '../../../services/api';

export const fetchSimilar = async () => {
  return fetchMovies('/movies/similar');
};
