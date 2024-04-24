import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Card, Image, Text } from '@mantine/core';
import classes from "./CardHover.module.css";

const CardHover = ({ slideRect }: any) => {
    console.log('slideReat', slideRect)
    useEffect(() => {
        // Thêm class "body-portal" vào body để tạo một điểm gắn kết cho portal
        document.body.classList.add("body-portal");
        return () => {
            // Xóa class "body-portal" khỏi body khi component bị unmount
            document.body.classList.remove("body-portal");
        };
    }, [slideRect]);

    console.log('slideRect', slideRect);

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
                top: slideRect?.top - 20 || 0,
                left: slideRect?.left || 0,
                width: slideRect?.width + 50 || 0,
                height: slideRect?.height + 40 || 0,
                marginLeft: -25,
                zIndex: 999
            }}
        >
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    h={160}
                    alt="No way!"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is not a fraud, trust us
            </Text>
        </Card>,
        portalContainer
    );
};

export default CardHover;
