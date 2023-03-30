import React from "react";
import { Wrapperheader } from "./Header.styled";
import logo from "../../assets/hamburguer.png";

const Header = () => {
  return (
    <Wrapperheader>
      <div className="container">
        <div className="logo">
         <p className="title">Good Hamburguer</p>
        </div>
        <nav className="navigation">
          <ul className="navigation-item">Restaurants</ul>
          <ul className="navigation-item">Help</ul>
        </nav>
      </div>
    </Wrapperheader>
  );
};

export default Header;
