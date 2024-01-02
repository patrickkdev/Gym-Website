import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Fitness Básico"
        desc="Inclui exercícios fundamentais para melhorar a resistência e a saúde geral."
      />
      <GymProgramCard
        title="Curso Avançado de Musculação"
        desc="Voltado para o desenvolvimento muscular avançado, com treinamento personalizado e técnicas avançadas."
      />
      <GymProgramCard
        title="Novo Treinamento na Academia"
        desc="Mantenha-se atualizado com métodos inovadores para alcançar seus objetivos de condicionamento."
      />
      <GymProgramCard
        title="Treinamento de Yoga"
        desc="Aprimore a flexibilidade, o equilíbrio e a consciência corporal enquanto desfruta dos benefícios da prática do yoga."
      />
      <GymProgramCard
        title="Curso Básico de Musculação"
        desc="Com foco em exercícios fundamentais, este curso é a introdução perfeita ao treinamento de força."
      />
      <GymProgramCard
        title="Curso de Musculação"
        desc="Programa abrangente com treinamento intensivo para construção muscular."
      />
    </Container>
  </div>
);

export default GymProgram;
