import useMovieDetails from "@/hooks/useMovieDetails";
import MoviesDetail from "@/components/movies/movieDetail/MovieDetail";

const MoviesDetailPage = async ({ params }: any) => {
  const { slug } = params as { slug: string };
  const { movieDetail, movieEpisodes } = await useMovieDetails({ slug });

  return (
    <MoviesDetail movieDetail={movieDetail} movieEpisodes={movieEpisodes} episode={1} />
  );
};

export default MoviesDetailPage;
