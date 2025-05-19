import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css"
export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} >
              <Link state={location} to={`/movies/${movie.id}`} className={s.listItemLink}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
