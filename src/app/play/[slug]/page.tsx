import useMovieDetails from "@/hooks/useMovieDetails";
import MoviePlayer from "@/components/movies/moviePlayer/MoviePlayer";

const MovieDisplay = async ({ params }: any) => {
  const { slug } = params as { slug: string };
  const { movieDetail, movieEpisodes, episode } = await useMovieDetails({
    slug,
  });

  return (
    <MoviePlayer
      movieDetail={movieDetail}
      movieEpisodes={movieEpisodes}
      slug={slug}
      episode={episode}
    />
  );
};

export default MovieDisplay;
