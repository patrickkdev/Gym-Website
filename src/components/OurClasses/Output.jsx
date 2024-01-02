import React from "react";
import Button from "../GlobalComponents/Button";

const Output = ({ title, info, img }) => (
  <div className="output">
    <img src={img} alt="class" />
    <h2>{title}</h2>
    <p>{info}</p>
    <Button text="Ver Horários" />
  </div>
);

export default Output;
