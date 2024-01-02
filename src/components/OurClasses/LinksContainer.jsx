import React from "react";
import DumbbellBg from "../Image/dumbbellOrange.png";
import Button from "../GlobalComponents/Button";

const LinksContainer = ({ setTraining, training }) => (
  <div className="linksContainer">
    <button
      className={training === "FirstClass" ? "active" : ""}
      onClick={() => setTraining("FirstClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Primeira Aula de Treinamento
    </button>
    <button
      className={training === "SecondClass" ? "active" : ""}
      onClick={() => setTraining("SecondClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Segunda Aula de Treinamento
    </button>
    <button
      className={training === "ThirdClass" ? "active" : ""}
      onClick={() => setTraining("ThirdClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Terceira Aula de Treinamento
    </button>
    <button
      className={training === "FourthClass" ? "active" : ""}
      onClick={() => setTraining("FourthClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Quarta Aula de Treinamento
    </button>
    <Button text="Ver Todos os Horários" />
  </div>
);

export default LinksContainer;
