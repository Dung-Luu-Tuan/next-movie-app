"use client";
import { MoviesListProps } from "@/types";
import { Carousel } from "@mantine/carousel";
import { Container, rem, HoverCard } from "@mantine/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import classes from "./MoviesList.module.css";
import CardHover from "./cardHover/CardHover";
import { useState } from "react";

const MoviesList = ({ name, list }: MoviesListProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [slideRect, setSlideRect] = useState({});

  const handleMouseEnter = (index: any) => {
    const slideElement = document.getElementById(`carousel-slide-${index}`);
    if (slideElement) {
      const rect = slideElement.getBoundingClientRect(); // Get information about the size and position of the element
      setSlideRect(rect);
    }
    setHoveredIndex(index); // When the mouse pointer enters a Slide, set hoveredIndex to the index of that Slide
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // When the mouse pointer leaves the Slide, set hoveredIndex to null
  };
  
  const slides = list.map((item: any, index: any) => (
    <Carousel.Slide key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} id={`carousel-slide-${index}`}>
      <Image
        src={"https://img.phimapi.com/" + item.poster_url}
        alt=""
        width={0}
        height={0}
        className={classes.image}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <p className={classes.name}>{item.name}</p>
      <p className={classes.origin}>{item.origin_name}</p>
      {hoveredIndex === index && <CardHover slideRect={slideRect} detail={item}/>}
    </Carousel.Slide>
  ));

  return (
    <Container>
      <h1 className={classes.title}>{name}</h1>
      <Carousel
        slideSize="12.5%"
        slideGap={{ base: 0, sm: "xs" }}
        align="start"
        slidesToScroll={8}
        draggable={false}
        nextControlIcon={
          <IconChevronRight style={{ width: rem(50), height: rem(50) }} />
        }
        previousControlIcon={
          <IconChevronLeft style={{ width: rem(50), height: rem(50) }} />
        }
        classNames={classes}
      >
        {slides}
      </Carousel>
    </Container>
  );
};

export default MoviesList;
