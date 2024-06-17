import { moviesStore } from "@/store/movies";
import { MovieDetails } from "@/types";

const useMovieDetails = async (params: {
  slug: string;
}): Promise<MovieDetails> => {
  const movies = moviesStore.getState().movies;
  const addMovies = moviesStore.getState().addMovies;

  let slug = params.slug;

  let parts = params.slug.split("-");
  let episode = parts.pop() as any;
  let beforeEpisode = parts.pop();

  slug = params.slug;

  if (isNaN(episode)) {
    episode = 1;
  } else {
    if (beforeEpisode === "tap") {
      slug = params.slug.slice(0, params.slug.lastIndexOf("-") - 4);
    } else {
      episode = 1;
    }
  }

  const movie = movies.find((item: any) => item?.data?.movie.slug === slug);
  if (movie) {
    return {
      movieDetail: movie.data.movie,
      movieEpisodes: movie.data.episodes?.[0]?.server_data,
    };
  } else {
    try {
      const res = await fetch(`https://phimapi.com/phim/${slug}`);
      const data = await res.json();
      addMovies([
        {
          data: {
            episodes: data.episodes,
            movie: data.movie,
          },
        },
      ]);
      return {
        movieDetail: data.movie,
        movieEpisodes: data.episodes?.[0]?.server_data,
      };
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return { movieDetail: null, movieEpisodes: null };
    }
  }
};

export default useMovieDetails;
