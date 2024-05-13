import React from "react";
import classes from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return <iframe src={src} className={classes.video} allowFullScreen></iframe>;
};

export default VideoPlayer;
