// tmdb.js
const API_KEY = "222e0e1213390198228914142be8261c";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
  if (!response.ok) throw new Error("Error fetching movies");
  const data = await response.json();
  return data.results;
}
