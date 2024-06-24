import MoviePlayer from "@/components/movies/play/MoviePlayer";
import useMovieDetails from "@/hooks/useMovieDetails";

const MovieDisplay = async ({ params }: any) => {
  const { slug } = params as { slug: string };
  const { movieDetail, movieEpisodes, episode, newSlug } = await useMovieDetails({
    slug,
  });

  console.log('slug123', newSlug)

  return (
    <MoviePlayer
      movieDetail={movieDetail}
      movieEpisodes={movieEpisodes}
      slug={newSlug}
      episode={episode}
    />
  );
};

export default MovieDisplay;
