import { MoviesListProps } from "@/types";
import { Carousel } from "@mantine/carousel";
import { Container, rem } from "@mantine/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import classes from "./MoviesList.module.css";

const MoviesList = ({ title, list }: MoviesListProps) => {
  const slides = list.map((item: any, index: any) => (
    <Carousel.Slide key={index}>
      <Image
        src={"https://img.phimapi.com/" + item.poster_url}
        alt=""
        width={0}
        height={0}
        className={classes.image}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <p className={classes.title}>{item.name}</p>
    </Carousel.Slide>
  ));

  return (
    <Container size="xl">
      <h1>{title}</h1>
      <Carousel
        slideSize="12.5%"
        slideGap={{ base: 0, sm: "xs" }}
        align="start"
        slidesToScroll={6}
        draggable={false}
        nextControlIcon={
          <IconChevronRight style={{ width: rem(50), height: rem(50) }} />
        }
        previousControlIcon={
          <IconChevronLeft style={{ width: rem(50), height: rem(50) }} />
        }
        className={classes.test}
      >
        {slides}
      </Carousel>
    </Container>
  );
};

export default MoviesList;
