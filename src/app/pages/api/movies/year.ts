"use client";
import { fetchMovies } from '../../../services/api';

export const fetchYear = async () => {
  return fetchMovies('/movies/year');
};
