import React, { useState } from "react";
import Logo from "./Logo";
import LinksContainer from "./LinksContainer";
import Container from "../GlobalComponents/Container";
import { Menu, MenuOpen } from "@mui/icons-material";

const Nav = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className='nav'>
      <Container>
        <Logo />
        <div id="burgerMenu" onClick={() => setHidden(!hidden)}>
        {
          hidden ?
          <Menu />
          :
          <MenuOpen />
        }
        </div>
        <LinksContainer hidden={hidden} />
      </Container>
    </nav>
  );
};

export default Nav;
