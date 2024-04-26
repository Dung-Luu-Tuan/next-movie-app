"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Flex, Card, Image, Text } from '@mantine/core';
import classes from "./CardHover.module.css";
import { moviesStore } from '@/store/movies'

const CardHover = ({ slideRect, detail }: any) => {
    const [slideData, setSlideData] = useState({ ...slideRect })
    const [movieDetail, setMovieDetail] = useState(detail);
    const movies = moviesStore((state: any) => state.movies)
    const addMovies = moviesStore((state: any) => state.addMovies)

    useEffect(() => {
        const itemChecking = movies.find((movie: any) => movie._id === detail._id);
        if(!itemChecking){
            fetch(`https://phimapi.com/phim/${detail.slug}`)
                .then((res) => res.json())
                .then((data) => {
                    setMovieDetail(data.movie)
                    addMovies([data.movie])
                });
        } else {
            setMovieDetail(itemChecking)
        }
        setSlideData(slideRect)
        // Add the "body-portal" class to the body to create a point of attachment for the portal
        document.body.classList.add("body-portal");
        return () => {
            // Remove the "body-portal" class from the body when the component is unmounted
            document.body.classList.remove("body-portal");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const portalContainer = document.querySelector(".body-portal");
    if (!portalContainer) return null;

    return createPortal(
        <Card
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            className={classes.card}
            style={{
                position: 'absolute',
                top: slideData?.top - 20 || 0,
                left: slideData?.left - 10 || 0,
                width: slideData?.width + 70 || 0,
                height: slideData?.height + 85 || 0,
                marginLeft: -25,
                zIndex: 999
            }}
        >
            <Card.Section>
                <Image
                    src={movieDetail.thumb_url}
                    h={160}
                    alt="img"
                />
            </Card.Section>

            <Text className={classes.name}>
                {movieDetail.name}
            </Text>

            <Flex direction="column" justify="flex-start" gap={'sm'}>
                <Text className={classes.row}>
                    {movieDetail.time} {'|'} {movieDetail.episode_current} {'|'} {movieDetail.year}
                </Text>

                <Text className={classes.row}>
                    {movieDetail.category.slice(0, 3).map((item: any, index: any) => (
                        <span key={index} className={classes.category}>{item.name}</span>
                    ))}
                </Text>

                <Text className={classes.row}>
                    Đạo diễn: {movieDetail.director?.join(', ')}
                </Text>

                <Text className={`${classes.row} ${classes.content}`}>
                    {movieDetail.content}
                </Text>
            </Flex>

            <Text className={classes.continue}>
                Xem thêm &#62;
            </Text>
        </Card>,
        portalContainer
    );
};

export default CardHover;
