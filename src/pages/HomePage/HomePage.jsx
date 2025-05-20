import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css"

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
      setMovies(movies.data.results);
        
      } catch (error) {
        console.log(error)
        
      }
      
    };
    getMovies();
  }, []);
  return (
    <div className={s.homeWrapper}>
      <h1>Trending today</h1>
      <MovieList movies={movies}/>
    </div>
  );
}
