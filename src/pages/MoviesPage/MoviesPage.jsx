import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";


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
            const response = await fetchMoviesByQuery(query);
            setMovies(response.data.results)
          
        }
        getDataByQuery();



     }, [query])
    return (
        <div>
            <h1>Movies</h1>
            <Formik initialValues={initialValues} onSubmit={handleQuery}>
                <Form>
                    <Field name='query'/>
                    <button type="submit">Search</button>
                </Form>
            </Formik>
            <MovieList movies={movies}/>
        </div>
    )
}