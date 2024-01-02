import React from "react";
import Nav from "../Navbar/Nav";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";

const Main = () => (
  <section className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
    <Video />
  </section>
);

export default Main;
