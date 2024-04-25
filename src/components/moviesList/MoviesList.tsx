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
      const rect = slideElement.getBoundingClientRect(); // Lấy thông tin về kích thước và vị trí của phần tử
      setSlideRect(rect);
    }
    setHoveredIndex(index); // Khi con trỏ chuột vào một Slide, set hoveredIndex là index của Slide đó
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Khi con trỏ chuột rời khỏi Slide, set hoveredIndex là null
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
      {hoveredIndex === index && <CardHover slideRect={slideRect} detail={item}/>}
    </Carousel.Slide>
  ));

  return (
    <Container size="xl">
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
