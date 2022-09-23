import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/OnePort365 logo.png";
import { SidebarData } from "../../components/SidebarData";
import "./Navbar.css"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="header">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <img src={LogoImg} alt="Logo-Img" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                {item.image }  
                <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
