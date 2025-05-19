import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import { useState, useEffect, useRef } from "react";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  console.log(movie);

  useEffect(() => {
    const getMovieById = async () => {
      const response = await fetchMovieById(movieId);
      setMovie(response.data);
    };
    getMovieById();
  }, [movieId]);
  return (
    <div className={s.detailWrapper}>
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
          return <p key={genre.id}>{genre.name}</p>;
        })}
        </ul>
        <p>{movie.overview}</p>
      </div>
   
      <div className={s.moreInfoMovieWrapper}>
      <Link to="cast" className={s.moreInfoMovieLink}>Cast</Link>
      <Link to="reviews" className={s.moreInfoMovieLink}>Reviews</Link>
      <div>
      <Outlet />
      </div>
      </div>
    </div>
  );
}
