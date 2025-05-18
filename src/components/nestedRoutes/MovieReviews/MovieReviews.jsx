import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByMovieId } from "../../../services/api";
export default function MovieReviews () {

    const {movieId} = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(()=> {
        const getReviewsById = async () => {
            const response = await fetchReviewsByMovieId(movieId);
            setReviews(response.data.results)
            
            
        }
        getReviewsById();

    }, [movieId])
    return (
        <div>
            <h3>Movie Reviews</h3>
            <ul>{reviews?.map((review)=> {
                return <li key={review.id}>{review.content}</li>
            })}</ul>
        </div>
    )
}