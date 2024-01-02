import React from "react";
import Link from "./Link";
import Button from "../GlobalComponents/Button";

const LinksContainer = ({ hidden }) => {
  return (
    <div className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name="INICIO" linkTo="#home" />
      <Link name="SOBRE" linkTo="#trainers" />
      <Link name="CLASSES" linkTo="#ourClasses" />
      <Link name="HORÁRIOS" linkTo="#schedule" />
      <Link name="CONTATO" linkTo="#contact" />
      <Button text="SEJA MEMBRO" />
    </div>
  );
};

export default LinksContainer;
