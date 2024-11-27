"use client";
import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchMovies } from '../../../services/api'; 

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await fetchMovies('/movies');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
};
