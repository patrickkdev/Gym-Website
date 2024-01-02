import React from "react";
import DumbbellIcon from "../Image/dumbbell.png";

const GymProgramCard = ({ title, desc }) => (
  <div className="card">
    <img src={DumbbellIcon} alt="dumbbell" />
    <div className="cardInfo">
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href="#/">SAIBA MAIS</a>
    </div>
  </div>
);

export default GymProgramCard;
