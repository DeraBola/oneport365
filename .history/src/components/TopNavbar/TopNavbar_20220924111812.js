import React from "react";
import { BsBell } from "react-icons/bs";
import "./TopNavbar.css";
import OnePort365 from ""

const TopNavbar = ({ title }) => (
  <div className="navtop_container">
    <div>
      <p className="p__Inter">{title}</p>
    </div>

    <div className="top_container">
      <div className="top_content">
        <BsBell className="top_content_bell" />
        <span>2</span>
      </div>

      <div className="top_container_drop-down">
      <select name="" id="">
      <option value=""> <img src={OnePort365} alt="OnePort" />  </option>    
      <option value="">Oil and Gas</option>  
      <option value="">IT</option>   
    </select>
      </div>
    </div>
  </div>
);

export default TopNavbar;
