import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import classes from './VideoPlayer.module.css'

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            if (Hls.isSupported()) {
                hlsRef.current = new Hls();
                hlsRef.current.loadSource(src);
                hlsRef.current.attachMedia(video);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = src;
            }
        }

        return () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
            }
        };
    }, [src]);

    // Xử lý sự kiện khi nhấn phím
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // if (event.key === 'ArrowRight') {
            //     event.preventDefault();
            //     if (videoRef.current) {
            //         videoRef.current.currentTime -= 30;
            //     }
            // }
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                if (videoRef.current && videoRef.current.currentTime > 0) {
                    videoRef.current.currentTime += 10;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return <video ref={videoRef} controls className={classes.video} />;
};

export default VideoPlayer;
