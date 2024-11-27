"use client";
import { fetchMovies } from '../../../services/api';

export const fetchDuration = async () => {
  return fetchMovies('/movies/duration');
};
