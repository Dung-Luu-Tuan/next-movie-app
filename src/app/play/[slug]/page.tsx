"use client";

import { useEffect, useRef, useState } from "react";
import { moviesStore } from "@/store/movies";
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
import classes from "./MovieDisplay.module.css";
import Link from "next/link";
import VideoPlayer from "@/components/movies/hls/VideoPlayer";

const MovieDisplay = ({ params }: any) => {
    let slug = params.slug.slice(0, params.slug.lastIndexOf("-"));
    let episode = params.slug.slice(params.slug.lastIndexOf("-") + 1);

    console.log('es', episode)
    if(isNaN(episode)){
        slug = params.slug;
        episode = 1;
    }

    const [movieDetail, setMovieDetail] = useState({}) as any;
    const [movieEspisodes, setMovieEspisodes] = useState() as any;
    const movies = moviesStore((state: any) => state.movies);
    const addMovies = moviesStore((state: any) => state.addMovies);
    const playerRef = useRef() as any;

    useEffect(() => {
        const movie = movies.find(
            (item: any) => item?.data?.movie.slug === slug
        );

        if (movie) {
            setMovieDetail(movie.data.movie);
            setMovieEspisodes(movie.data.episodes?.[0]?.server_data);
        } else {
            fetch(`https://phimapi.com/phim/${slug}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log('data', data)
                    setMovieDetail(data.movie);
                    setMovieEspisodes(data.episodes?.[0]?.server_data);
                    addMovies([
                        {
                          data: {
                            episodes: data.episodes,
                            movie: data.movie,
                          },
                        },
                    ]);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log('hehe', movieEspisodes?.length);
    }, [movieEspisodes])

    return (
        <>
            <Container className={classes.container}>
                <Container className={classes.detail}>
                    <Grid className={classes.grid}>
                        <Grid.Col span={9} className={classes.video}>
                            {movieEspisodes && <VideoPlayer src={movieEspisodes?.[episode - 1]?.link_m3u8} />}
                        </Grid.Col>
                        <Grid.Col span={3} className={classes.select}>
                            <Flex direction="column" justify="flex-start" >
                                <Text className={classes.name} fw={700} size="lg">
                                    {movieDetail.name}
                                </Text>
                                <Text className={classes.title} >
                                    Chọn tập 1-{movieEspisodes?.length}
                                </Text>
                                <Text className={classes.slogan} >
                                    Xem toàn tập miễn phí.
                                </Text>
                                <Flex direction="row" justify="flex-start" gap={"sm"} wrap="wrap" className={classes.episodes}>
                                    {movieEspisodes?.map((item: any, index: any) =>
                                        <Link href={`/play/${slug}-${index + 1}`} key={index}>
                                            <Text className={`${classes.episode} ${(index === episode - 1) && classes.selected}`}>{index + 1}</Text>
                                        </Link>
                                    )}
                                </Flex>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Container>
        </>
    );
};

export default MovieDisplay;
