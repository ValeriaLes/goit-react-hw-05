import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchTrendingMovies();
      setMovies(movies.data.results);
      
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies}/>
    </div>
  );
}
