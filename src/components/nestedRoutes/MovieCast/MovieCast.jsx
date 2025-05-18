
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastByMovieId } from "../../../services/api";
export default function MovieCast () {

    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    const baseImgURL = 'https://image.tmdb.org/t/p'
   
    useEffect(()=> {
        const getCastById = async () => {
            const response = await fetchCastByMovieId(movieId);
            setCast(response.data.cast)
           
            
        }
        getCastById();

    }, [movieId])
    return (
        <div>
            <h3>Movie Cast</h3>
            <ul>
                {cast.map((cast) => {
                    return <li key={cast.id}>
                        <img src={`${baseImgURL}/w200${cast.profile_path}`} alt="actors" />
                        {cast.name}</li>
                })}
            </ul>
        </div>
    )
}