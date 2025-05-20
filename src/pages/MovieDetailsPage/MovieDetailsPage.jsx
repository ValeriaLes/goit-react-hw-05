import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import { useState, useEffect, useRef } from "react";
import s from "./MovieDetailsPage.module.css";
import { ClipLoader } from "react-spinners";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  const [isLoading, setIsLoading] = useState(false)

 

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true)
        const response = await fetchMovieById(movieId);
      setMovie(response.data);
        
      } catch (error) {
        console.log(error)
        
      } finally {
        setIsLoading(false)
      }
    };
    getMovieById();
  }, [movieId]);

  return (
  
    <div className={s.detailWrapper}>
        {isLoading ? <ClipLoader/> : <>
      <Link to={goBackRef.current} className={s.goBackBtn}>
        go back
      </Link>
     
      <div className={s.mainInfoMovieWrapper}>
        <h2 className={s.movieTitle}>{movie.title}</h2>
        <h4>{movie.tagline}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="movie-picture"
        />
         <ul className={s.genreDescr}>
        {movie?.genres?.map((genre) => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
        </ul>
        <p>{movie.overview}</p>
      </div>
      <div className={s.moreInfoMovieLinks}>
      <Link to="cast" className={s.moreInfoMovieLink}>Cast</Link>
      <Link to="reviews" className={s.moreInfoMovieLink}>Reviews</Link>
     
  
      </div>
      <Outlet/>
      </>}
     
    
     
    </div>
  );
}
