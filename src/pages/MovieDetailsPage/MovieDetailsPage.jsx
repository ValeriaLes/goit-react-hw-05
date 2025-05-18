import { Outlet, useParams, Link } from "react-router-dom"
import { fetchMovieById } from "../../services/api";
import { useState, useEffect } from "react";


export default function MovieDetailsPage () {

    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    //  const baseImgURL = 'https://image.tmdb.org/t/p';
    

    useEffect(()=> {
        const getMovieById = async () => {
            const response = await fetchMovieById(movieId);
            setMovie(response.data)
            
        }
        getMovieById();

    }, [movieId])
    return(
        <div>
            
            <h2>{movie.title}</h2>
            <Link to='cast'>Cast</Link>
            <Link to='reviews'>Reviews</Link>
            <Outlet/>
        </div>
     
    )
}