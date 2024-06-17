"use client";

import { MoviesListProps } from "@/types";
import { Carousel } from "@mantine/carousel";
import { Center, Container, Loader, rem } from "@mantine/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./MoviesList.module.css";
import CardHover from "./cardHover/CardHover";

const MoviesList = ({ name, list, type }: MoviesListProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [slideRect, setSlideRect] = useState({});

  const handleMouseEnter = (index: any) => {
    const slideElement = document.getElementById(
      `${type}-carousel-slide-${index}`
    );
    if (slideElement) {
      const rect = calculateSlidePosition(slideElement);
      setSlideRect(rect);
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const observeSlides = () => {
    const slides = document.querySelectorAll<HTMLElement>(
      `.${type}-carousel-slide`
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const dataIndex = entry.target.getAttribute("data-index");
          if (dataIndex) {
            const rect = calculateSlidePosition(entry.target as HTMLElement);
            setSlideRect(rect);
          }
        }
      });
    });

    slides.forEach((slide) => {
      observer.observe(slide);
    });
  };

  const calculateSlidePosition = (slide: HTMLElement) => {
    const rect = slide.getBoundingClientRect();
    const headerElement = document.querySelector("header");
    if (!headerElement) return {}; // Nếu không tìm thấy header, trả về một object rỗng

    const headerTop = headerElement.getBoundingClientRect().top; // Lấy vị trí của header trong cửa sổ trình duyệt
    const slideTop = rect.top - headerTop; // Tính toán khoảng cách top của slide so với header
    return {
      top: slideTop,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  };

  useEffect(() => {
    observeSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const slides = list.map((item: any, index: any) => (
    <Carousel.Slide
      key={`${name}-${index}`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      id={`${type}-carousel-slide-${index}`}
      className={`${type}-carousel-slide`}
      data-index={index}
    >
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
      {hoveredIndex === index && (
        <CardHover slideRect={slideRect} detail={item} />
      )}
    </Carousel.Slide>
  ));

  return (
    <Container className={classes.content}>
      <div className={classes.block}>
        <h1 className={classes.title}>{name}</h1>
      </div>
      <Carousel
        slideSize={{ base: "50%", sm: "33.33%", md: "25%", lg: "12.5%" }} // Thay đổi kích thước slide theo breakpoint
        slideGap={{ base: "xs", sm: "sm", md: "md", lg: "lg" }} // Thay đổi khoảng cách giữa slide theo breakpoint
        align="start"
        slidesToScroll={8}
        draggable={false}
        nextControlIcon={
          <IconChevronRight style={{ width: rem(50), height: rem(50) }} />
        }
        previousControlIcon={
          <IconChevronLeft style={{ width: rem(50), height: rem(50) }} />
        }
      >
        {list.length === 0 ? (
          <Center>
            <Loader size={20} type="bars" />
          </Center>
        ) : (
          slides
        )}
      </Carousel>
    </Container>
  );
};

export default MoviesList;
