import React from "react";
import classes from "./VideoPlayer.module.css";
import { VideoPlayerProps } from "@/types";

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  console.log("src", src);
  return <iframe src={src} className={classes.video} allowFullScreen></iframe>;
};

export default VideoPlayer;
