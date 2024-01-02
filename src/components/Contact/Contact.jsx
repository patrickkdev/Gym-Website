import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";

const Contact = () => (
  <section className="contact" id="contact">
    <Container>
      <Map />
      <Form />
    </Container>
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} Sua Marca Aqui - by {" "}
        <a href="https://patrickferreira.vercel.app/" target="_blank">
          Patrick Ferreira
        </a>
      </p>
    </footer>
  </section>
);

export default Contact;
