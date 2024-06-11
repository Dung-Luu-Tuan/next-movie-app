"use client";

import MoviesList from "@/components/movies/MoviesList";
import useMovieList from "@/hooks/useMovieList";
import { MovieCategory, MovieCategoryDisplayName } from "../types/enums"

const Home = () => {
  const { movieList: movieList1 } = useMovieList(MovieCategory.Series);
  const { movieList: movieList2 } = useMovieList(MovieCategory.Movie);
  const { movieList: movieList3 } = useMovieList(MovieCategory.Animation);
  const { movieList: movieList4 } = useMovieList(MovieCategory.TVShow);

  return (
    <>
      <MoviesList name={MovieCategoryDisplayName[MovieCategory.Series]} list={movieList2} type={MovieCategory.Series}/>
      <MoviesList name={MovieCategoryDisplayName[MovieCategory.Movie]} list={movieList1} type={MovieCategory.Movie}/>
      <MoviesList name={MovieCategoryDisplayName[MovieCategory.Animation]} list={movieList3} type={MovieCategory.Animation}/>
      <MoviesList name={MovieCategoryDisplayName[MovieCategory.TVShow]} list={movieList4} type={MovieCategory.TVShow}/>
    </>
  );
};

export default Home;
