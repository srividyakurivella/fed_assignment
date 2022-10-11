import React from "react";
import about from "./about.js";

const Navbar = () => {
  return (
    <div className="menu">
      <div className="logo">
        
        <a href="" >  
          REACT  
        </a>
          
      
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about" >ABOUT</a>
         
          </li>
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          <li>
            <a href="#clients">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
