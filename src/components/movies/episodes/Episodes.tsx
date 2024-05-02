"use client";

import { Container, rem, Flex, AspectRatio, Text, Image } from "@mantine/core";
import classes from './Episodes.module.css'

const Episodes = ({ episodes, poster }: any) => {
    console.log('epi', episodes)

    return (
        <Container className={classes.container}>
            <Flex
                mih={50}
                gap="xs"
                justify="center"
                align="flex-center"
                direction="row"
                wrap="wrap"
            >
                {episodes?.map((item: any, index: any) => {
                    return (
                        <Text key={index} className={classes.episodeContainer}>
                            <div className={classes.episodeContent}>
                                <Image src={poster} h={400} alt="img" className={classes.episodeImage} />
                                <Text className={classes.episodeName}>{item?.name}</Text>
                                
                            </div>
                        </Text>
                    )
                })}

            </Flex>
        </Container>
    );
};

export default Episodes;
