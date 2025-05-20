import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css"


export default function Movie () {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [movies, setMovies] = useState([]);

    const initialValues = {
        query:''
    }
    const handleQuery = (values) => {
        setSearchParams({query: values.query})
       

    }
     useEffect(() => {
        if (!query) return;

        const getDataByQuery = async() => {
            try {
                const response = await fetchMoviesByQuery(query);
            setMovies(response.data.results)
                
            } catch (error) {
                console.log(error)
            }
          
        }
        getDataByQuery();



     }, [query])
    return (
        <div className={css.moviesPageWrapper}>
            <h1>Movies</h1>
            <Formik initialValues={initialValues} onSubmit={handleQuery}>
                <Form>
                    <Field name='query'/>
                    <button type="submit" className={css.submitBtn}>Search</button>
                </Form>
            </Formik>
            <MovieList movies={movies}/>
        </div>
    )
}