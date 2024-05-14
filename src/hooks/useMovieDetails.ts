import { moviesStore } from "@/store/movies";
import { useEffect, useState } from "react";

const useMovieDetails = (params: { slug: string }) => {
  const [movieDetail, setMovieDetail] = useState<any>(null);
  const [movieEpisodes, setMovieEpisodes] = useState<any>(null);
  const movies = moviesStore((state: any) => state.movies);
  const addMovies = moviesStore((state: any) => state.addMovies);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://phimapi.com/phim/${slug}`);
        const data = await res.json();
        setMovieDetail(data.movie);
        setMovieEpisodes(data.episodes?.[0]?.server_data);
        addMovies([
          {
            data: {
              episodes: data.episodes,
              movie: data.movie,
            },
          },
        ]);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const movie = movies.find((item: any) => item?.data?.movie.slug === slug);
    if (movie) {
      setMovieDetail(movie.data.movie);
      setMovieEpisodes(movie.data.episodes?.[0]?.server_data);
    } else {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);

  return { movieDetail, movieEpisodes, slug, episode };
};

export default useMovieDetails;
