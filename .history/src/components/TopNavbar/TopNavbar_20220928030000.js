import React, { useState } from "react";
import { BsBell } from "react-icons/bs";
import "./TopNavbar.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import { BsFillCaretDownFill } from "react-icons/bs";

const TopNavbar = ({ title }) => {
  const [dropdown, setdropdown] = useState(false);

  return (
    <>
      <nav className="navtop_container">
        <div>
          <p className="p__Inter">{title}</p>
        </div>

        <div className="top_container" onMouseLeave={() => setdropdown(false)}  >
          <div className="top_content">
            <BsBell className="top_content_bell" />
            <span>2</span>
          </div>

          <div className="dropdown_container">
            <div
              className="dropdown_industries"
              onMouseEnter={() => setdropdown(true)}
            >
              <p>Industries < BsFillCaretDownFill /></p> 
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default TopNavbar;
