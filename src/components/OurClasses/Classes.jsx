import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import LinksContainer from "./LinksContainer";
import Results from "./Results";
import Container from "../GlobalComponents/Container";

const Classes = () => {
  const [training, setTraining] = useState("FirstClass");

  return (
    <section className="ourClasses" id="ourClasses">
      <h2>
        NOSSAS <span>AULAS</span>
      </h2>
      <Icon />
      <p>
        Inspire-se, mova-se e alcance seus objetivos com as nossas aulas envolventes e motivadoras.
        <br />
        Descubra o caminho para uma jornada de fitness emocionante e eficaz!
      </p>
      <Container>
        <LinksContainer setTraining={setTraining} training={training} />
        <Results training={training} />
      </Container>
    </section>
  );
};

export default Classes;
