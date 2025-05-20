
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastByMovieId } from "../../../services/api";
import css from "./MovieCast.module.css"
import { ClipLoader } from "react-spinners";
export default function MovieCast () {

    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    const baseImgURL = 'https://image.tmdb.org/t/p';
    const [loading, setLoading] = useState(false)

    
   
    useEffect(()=> {
        const getCastById = async () => {
           try {
            setLoading(true)
            const response = await fetchCastByMovieId(movieId);
            setCast(response.data.cast)
            
           } catch (error) {
            console.log(error)
            
           } finally {
            setLoading(false)
           }
           
            
        }
        getCastById();

    }, [movieId])
    return (
        <div className={css.movieCastWrapper}>
           {loading ? <ClipLoader/> : <>
            <h3 className={css.castTitle}>Movie Cast</h3>
            <ul className={css.castList}>
                {cast.map((cast) => {
                    return <li key={cast.cast_id} className={css.castListItem}>
                        <img src={`${baseImgURL}/w200${cast.profile_path}`} alt="actors" />
                        {cast.name}</li>
                })}
            </ul></>}
        </div>
    )
}