"use client";

import MoviesList from "@/components/movies/MoviesList";
import useMovieList from "@/hooks/useMovieList";

const Home = () => {
  const { movieList: movieList1, name: name1 } = useMovieList('phim-bo');
  const { movieList: movieList2, name: name2 } = useMovieList('phim-le');
  const { movieList: movieList3, name: name3 } = useMovieList('hoat-hinh');
  const { movieList: movieList4, name: name4 } = useMovieList('tv-shows');

  return (
    <>
      <MoviesList name={name2} list={movieList2} type="phim-le"/>
      <MoviesList name={name1} list={movieList1} type="phim-bo"/>
      <MoviesList name={name3} list={movieList3} type="hoat-hinh"/>
      <MoviesList name={name4} list={movieList4} type="tv-shows"/>
    </>
  );
};

export default Home;
