import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from "./assets/img/OnePort365l"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
              <img src={LogoImg} alt="Logo-Img"/>  
              </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
