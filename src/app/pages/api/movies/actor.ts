"use client";
import { fetchMovies } from '../../../services/api';

export const fetchActor = async () => {
  return fetchMovies('/movies/actor');
};
