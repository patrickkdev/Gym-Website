import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import ScheduleLinks from "./ScheduleLinks";
import Table from "./Table";
import Container from "../GlobalComponents/Container";

const Schedule = () => {
  const [hidden, setHidden] = useState(false);
  const [day, setDay] = useState("Monday");
  
  return (
    <section className="schedule" id="schedule">
      <h2>
        <span>HORÁRIO</span> DAS AULAS
      </h2>
      <Icon />
      <p>
        Explore nosso horário de aulas e encontre o momento ideal para se envolver, se desafiar e progredir em direção aos seus objetivos.
        <br />
      </p>
      <Container>
        <ScheduleLinks setDay={setDay} day={day} />
        <Table day={day} />
      </Container>
    </section>
  );
};

export default Schedule;
