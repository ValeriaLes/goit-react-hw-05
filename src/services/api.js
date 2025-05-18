import axios from "axios";

export const fetchTrendingMovies = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1', {
       
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWI0MjQ2Njg2NGFmMDkwMDA1ZTUzZTE1ZGFmMmM2MCIsIm5iZiI6MTc0NzUwOTIwNy45MzI5OTk4LCJzdWIiOiI2ODI4ZGZkNzkzM2U4OGUwNjJlMjQ0Y2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nzR3_2ZUx61VLyKedsEesW2lGhHTTzPy0wT-s8fUzVI'
          }

          
    })
   
    return response;

}

export const fetchMovieById = async (movieId) => {
   
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWI0MjQ2Njg2NGFmMDkwMDA1ZTUzZTE1ZGFmMmM2MCIsIm5iZiI6MTc0NzUwOTIwNy45MzI5OTk4LCJzdWIiOiI2ODI4ZGZkNzkzM2U4OGUwNjJlMjQ0Y2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nzR3_2ZUx61VLyKedsEesW2lGhHTTzPy0wT-s8fUzVI'
          }
    })
   
    return response;
}

export const fetchReviewsByMovieId = async (movieId) => {
   
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWI0MjQ2Njg2NGFmMDkwMDA1ZTUzZTE1ZGFmMmM2MCIsIm5iZiI6MTc0NzUwOTIwNy45MzI5OTk4LCJzdWIiOiI2ODI4ZGZkNzkzM2U4OGUwNjJlMjQ0Y2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nzR3_2ZUx61VLyKedsEesW2lGhHTTzPy0wT-s8fUzVI'
          }
    })
   
    return response;
}

export const fetchCastByMovieId = async (movieId) => {
   
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWI0MjQ2Njg2NGFmMDkwMDA1ZTUzZTE1ZGFmMmM2MCIsIm5iZiI6MTc0NzUwOTIwNy45MzI5OTk4LCJzdWIiOiI2ODI4ZGZkNzkzM2U4OGUwNjJlMjQ0Y2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nzR3_2ZUx61VLyKedsEesW2lGhHTTzPy0wT-s8fUzVI'
          }
    })
   
   
    return response;
}

export const fetchMoviesByQuery = async (query) => {
   
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`, {
        params: {
            query:query
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWI0MjQ2Njg2NGFmMDkwMDA1ZTUzZTE1ZGFmMmM2MCIsIm5iZiI6MTc0NzUwOTIwNy45MzI5OTk4LCJzdWIiOiI2ODI4ZGZkNzkzM2U4OGUwNjJlMjQ0Y2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nzR3_2ZUx61VLyKedsEesW2lGhHTTzPy0wT-s8fUzVI'
          }
    })
   
   
    return response;
}

