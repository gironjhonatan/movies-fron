const BASE_URL = 'http://localhost:3000';

export const fetchMovies = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  return res.json();
};
