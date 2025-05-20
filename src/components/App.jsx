import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/HomePage";
// import Movies from "../pages/MoviesPage/MoviesPage";
import NotFound from "../pages/NotFound/NotFound";
import Header from "./Navigation/Navigation";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./nestedRoutes/MovieCast/MovieCast";
// import MovieReviews from "./nestedRoutes/MovieReviews/MovieReviews";
import { lazy, Suspense } from "react";

const MovieDetailsPage = lazy(()=> import("../pages/MovieDetailsPage/MovieDetailsPage"))
const MovieCast = lazy(()=> import("./nestedRoutes/MovieCast/MovieCast"))
const MovieReviews = lazy(()=> import("./nestedRoutes/MovieReviews/MovieReviews"))
const Movies = lazy(()=> import("../pages/MoviesPage/MoviesPage"))

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
