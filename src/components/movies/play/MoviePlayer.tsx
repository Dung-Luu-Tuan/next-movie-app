"use client";

import { Container, Text, Flex, Grid } from "@mantine/core";
import classes from "./MoviePlayer.module.css";
import Link from "next/link";
import VideoPlayer from "@/components/movies/hls/VideoPlayer";
import { MoviesDetailProps } from "@/types";

const MoviePlayer: React.FC<MoviesDetailProps> = ({ movieDetail, movieEpisodes, episode, slug }) => {
    return (
        <>
            <Container className={classes.container}>
                <Container className={classes.detail}>
                    <Grid className={classes.grid}>
                        <Grid.Col span={9} className={classes.video}>
                            {!!movieEpisodes && (
                                <VideoPlayer src={movieEpisodes?.[episode - 1]?.link_embed} />
                            )}
                        </Grid.Col>
                        <Grid.Col span={3} className={classes.select}>
                            <Flex direction="column" justify="flex-start">
                                <Text className={classes.name} fw={700} size="lg">
                                    {movieDetail?.name}
                                </Text>
                                <Text className={classes.title}>
                                    Chọn tập 1-{movieEpisodes?.length}
                                </Text>
                                <Text className={classes.slogan}>Xem toàn tập miễn phí.</Text>
                                <Flex
                                    direction="row"
                                    justify="flex-start"
                                    gap={"sm"}
                                    wrap="wrap"
                                    className={classes.episodes}
                                >
                                    {movieEpisodes?.map((_: any, index: any) => (
                                        <Link href={`/play/${slug}-tap-${index + 1}`} key={index}>
                                            <Text
                                                className={`${classes.episode} ${index === episode - 1 && classes.selected}`}
                                            >
                                                {index + 1}
                                            </Text>
                                        </Link>
                                    ))}
                                </Flex>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Container>
        </>
    );
};

export default MoviePlayer;
