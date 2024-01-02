import React from "react";
import Button from "../GlobalComponents/Button";

const Form = () => (
  <div className="formContainer">
    <form>
      <input type="text" placeholder="Seu Nome*" />
      <input type="text" placeholder="Seu Email*" />
      <input type="text" placeholder="Assunto" />
      <textarea cols="30" rows="10" placeholder="Mensagem"></textarea>
      <Button text="ENVIAR MENSAGEM" />
    </form>
  </div>
);

export default Form;
