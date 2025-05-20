import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByMovieId } from "../../../services/api";
import css from "./MovieReviews.module.css"
import { ClipLoader } from "react-spinners";
export default function MovieReviews () {

    const {movieId} = useParams();
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const getReviewsById = async () => {
          try {
            setLoading(true)
            const response = await fetchReviewsByMovieId(movieId);
            setReviews(response.data.results)
          } catch (error) {
            
            console.log(error)
          } finally{
            setLoading(false)
          }
            
            
        }
        getReviewsById();

    }, [movieId])
    return (
        <div className={css.reviewWrapper}>
           {loading ? <ClipLoader/> : <>
            <h3 className={css.reviewTitle}>Movie Reviews</h3>
           {reviews.length > 0 ? <ul className={css.reviewList}>{reviews.map((review)=> {
                return <li key={review.id}>{review.content}</li>
            })}</ul> : <p>No reviews for this movie</p>}</>}
        </div>
    )
}