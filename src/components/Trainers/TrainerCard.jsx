import React from "react";
import Socials from "./Socials";

const TrainerCard = ({ title, name, desc, img }) => (
  <div className="trainerCard">
    <img src={img} alt="trainer" />
    <h5>{title}</h5>
    <h3>{name}</h3>
    <p>{desc}</p>
    <Socials />
  </div>
);

export default TrainerCard;
