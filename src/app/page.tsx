import MoviesList from "@/components/movies/MoviesList";
import { MovieCategory, MovieCategoryDisplayName, MovieTypesArray } from "@/types/enums";

const Home = async () => {
  const fetchMovieList = async (type: string) => {
    const res = await fetch(
      `https://phimapi.com/v1/api/danh-sach/${type}?limit=32`
    );
    const data = await res.json();
    return { type, movies: data?.data?.items || [] };
  };

  const fetchRequests = MovieTypesArray.map(type => fetchMovieList(type));
  const movieLists = await Promise.all(fetchRequests);

  return (
    <>
      {movieLists.map((item, index) => (
        <MoviesList
          key={index}
          name={MovieCategoryDisplayName[item.type as MovieCategory]}
          list={item.movies}
          type={item.type as MovieCategory}
        />
      ))}
    </>
  );
};

export default Home;
