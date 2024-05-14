"use client";

import { Container, rem, Flex, Text, Image } from "@mantine/core";
import classes from './Episodes.module.css'
import Link from "next/link";

const Episodes = ({ episodes, poster, slug }: any) => {
    return (
        <Container className={classes.container}>
            <Flex
                mih={50}
                gap="xs"
                align="flex-center"
                direction="row"
                wrap="wrap"
            >
                {episodes?.map((item: any, index: any) => {
                    return (
                        <Link href={`/play/${slug}-tap-${index+1}`} key={index} className={classes.episodeContainer}>
                            <div className={classes.episodeContent}>
                                <Image src={poster} h={400} alt="img" className={classes.episodeImage} />
                                <Text className={classes.episodeName}>{item?.name}</Text>
                            </div>
                        </Link>
                    )
                })}

            </Flex>
        </Container>
    );
};

export default Episodes;
