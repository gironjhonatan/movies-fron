"use client";
import { fetchMovies } from '../../../services/api';

export const fetchPopularity = async () => {
  return fetchMovies('/movies/popularity');
};
