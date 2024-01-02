import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import TrainerTwoBg from "../Image/trainerTwo.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";

const trainers = [
  {
    role: "Instrutor de Musculação",
    name: "Ricardo Santos",
    description: "Especializado em treinamento de musculação, Ricardo é comprometido em ajudar os alunos a alcançarem seus objetivos de condicionamento físico. Com abordagem personalizada, ele foca em desenvolver força, resistência e uma mente saudável.",
    img: TrainerOneBg,
  },
  {
    role: "Instrutor de Funcional",
    name: "Carlos Oliveira",
    description: "Especialista em treinamento funcional, Carlos dedica-se a desenvolver programas de exercícios que melhoram a força, a estabilidade e a mobilidade. Seu foco está em proporcionar aos alunos uma abordagem prática para aprimorar suas atividades diárias.",
    img: TrainerTwoBg,
  },
  {
    role: "Instrutor de Crossfit",
    name: "Lucas Silva",
    description: "Especialista em treinamento de Crossfit, apaixonado por ajudar os alunos a atingirem seus objetivos de condicionamento físico. Com uma abordagem dinâmica e motivadora, Lucas foca em promover o equilíbrio entre força e resistência.",
    img: TrainerThreeBg,
  },
]

const Trainers = () => (
  <section className="trainers" id="trainers">
    <h2>
      NOSSOS <span>INSTRUTORES</span>
    </h2>
    <Icon />
    <p>
      Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra{" "}
      <br />
      ipsum dolor, ultricies fermentum massa consequat eu.
    </p>
    <Container>
      {
        trainers.map((trainer, index) => (
          <TrainerCard
            key={index}
            title={trainer.role}
            name={trainer.name}
            desc={trainer.description}
            img={trainer.img}
          />
        ))
      }
    </Container>
  </section>
);

export default Trainers;
