import React from "react";
import VideoBg from "../Image/bgVideo.mp4";

const Video = () => (
  <video className='video' autoPlay muted loop>
    <source src={VideoBg} type="video/mp4" />
  </video>
);

export default Video;
