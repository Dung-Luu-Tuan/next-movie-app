"use client";

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

const MoviesDetail = ({ params }: any) => {
  const { movieDetail, movieEpisodes } = useMovieDetails(params);

  return (
    <>
      <Container className={classes.container}>
        <Container className={classes.detail}>
          <Flex direction="column" justify="flex-start">
            <Text className={classes.name} fw={700}>
              {movieDetail?.name}
            </Text>
            <Text className={classes.director}>
              Đạo diễn: {movieDetail?.director?.join(", ")}
            </Text>
            <Text className={classes.origin}>
              Tên quốc tế: {movieDetail?.origin_name}
            </Text>
            <Text className={classes.time}>
              {movieDetail?.time} {"|"} {movieDetail?.episode_current} {"|"}{" "}
              {movieDetail?.year}
            </Text>

            <Grid className={classes.grid}>
              <Grid.Col span={3} className={classes.poster}>
                <Image src={movieDetail?.poster_url} h={400} alt="img" />
              </Grid.Col>
              <Grid.Col span={7} className={classes.trailer}>
                <AspectRatio style={{ height: "400px" }}>
                  <iframe
                    src={movieDetail?.trailer_url?.replace("/watch?v=", "/embed/")}
                    title="YouTube video player"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                  />
                </AspectRatio>
              </Grid.Col>
              <Grid.Col span={2} className={classes.others}>
                <Flex direction="column" style={{ height: "400px", gap: "3px" }}>
                  <Button
                    className={classes.otherButton}
                    variant="default"
                    color="gray"
                    radius="xs"
                  >
                    <Text className={classes.otherButtonDetail}>
                      <IconBrandYoutube
                        style={{ width: rem(25), height: rem(25) }}
                        stroke={1.5}
                      />
                      <Text>VIDEO</Text>
                    </Text>
                  </Button>
                  <Button
                    className={classes.otherButton}
                    variant="default"
                    color="gray"
                    radius="xs"
                  >
                    <Text className={classes.otherButtonDetail}>
                      <IconPhoto
                        style={{ width: rem(25), height: rem(25) }}
                        stroke={1.5}
                      />
                      <Text>PHOTOS</Text>
                    </Text>
                  </Button>
                </Flex>
              </Grid.Col>
            </Grid>

            <Group>
              {movieDetail?.category?.map((item: any, index: any) => (
                <Button
                  key={index}
                  variant="default"
                  className={classes.category}
                >
                  {item.name}
                </Button>
              ))}
            </Group>

            <Text className={classes.content}>{movieDetail?.content}</Text>

            <Text className={`${classes.actors}`}>
              <Flex direction="row" gap="md">
                <Text fw={700}>Diễn viên</Text>
                <Flex direction="row" gap="sm" align="center">
                  {movieDetail?.actor
                    ?.slice(0, 3)
                    ?.map((item: any, index: any) => (
                      <>
                        <Text
                          key={index}
                          variant="default"
                          className={classes.actor}
                        >
                          {item}
                        </Text>
                        {index !== 2 && (
                          <IconSnowflake
                            style={{ width: rem(6), height: rem(6) }}
                            stroke={1.5}
                          />
                        )}
                      </>
                    ))}
                </Flex>
              </Flex>
            </Text>
          </Flex>
        </Container>
      </Container>
      <Container>
        <Container className={classes.detail}>
          <Episodes episodes={movieEpisodes} poster={movieDetail?.poster_url} slug={movieDetail?.slug}/>
        </Container>
      </Container>
    </>
  );
};

export default MoviesDetail;
