import {
  Container,
  Text,
  Flex,
  Grid,
  Image,
  AspectRatio,
  Button,
  Group,
  rem,
} from "@mantine/core";
import classes from "./MovieDetail.module.css";
import {
  IconSnowflake,
  IconBrandYoutube,
  IconPhoto,
} from "@tabler/icons-react";
import Episodes from "@/components/movies/episodes/Episodes";
import useMovieDetails from "@/hooks/useMovieDetails";
import MoviesDetail from "@/components/movies/movieDetail/MovieDetail";

const MoviesDetailPage = async ({ params }: any) => {
  const { slug } = params as { slug: string };
  const { movieDetail, movieEpisodes } = await useMovieDetails({ slug });

  return (
    <>
      <MoviesDetail 
        movieDetail={movieDetail}
        movieEpisodes={movieEpisodes}
      />
    </>
  );
};

export default MoviesDetailPage;
