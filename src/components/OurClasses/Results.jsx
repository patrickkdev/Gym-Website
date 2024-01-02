import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div className="results">
    {training === "FirstClass" && (
      <Output
        title="Primeira Aula de Treinamento"
        info="Descubra os fundamentos do condicionamento físico nesta aula introdutória. Concentrando-se em técnicas essenciais, você começará a construir uma base sólida para sua jornada de fitness. Prepare-se para uma experiência energizante que o impulsionará na direção certa."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Segunda Aula de Treinamento"
        info="Eleve a intensidade em nossa segunda aula, projetada para desafiar seus limites e promover avanços notáveis. Com uma combinação cuidadosamente elaborada de exercícios, você fortalecerá seu corpo e aumentará sua resistência. Esteja pronto para superar obstáculos e alcançar novos patamares."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Terceira Aula de Treinamento"
        info="Explore a diversidade do treinamento físico nesta aula abrangente. Desde exercícios de cardio até exercícios de resistência, esta sessão dinâmica oferece uma abordagem holística para o condicionamento. Aperfeiçoe suas habilidades, desafie-se e sinta-se revigorado ao final."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Quarta Aula de Treinamento"
        info="Prepare-se para a excelência nesta quarta aula, onde a ênfase está na aplicação prática de técnicas avançadas. Aumente a complexidade dos exercícios e refine sua forma, garantindo resultados notáveis. Esta aula é destinada àqueles que buscam superar constantemente seus próprios limites."
        img={ClassFourBg}
      />
    )}
  </div>
);

export default Results;
