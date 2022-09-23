import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/OnePort365 logo.png"

function Navbar() {
     const [ sidebar, setSidebar ] = useState(false)
    
     const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
              <img src={LogoImg} alt="Logo-Img"/>  
              </Link>
          </li>
          {SidebarData.map((item,index ) => {
return(
    <li key={index} className={item.cName}>
        <Link to={}></Link>
    </li> 
)
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
