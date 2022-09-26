import React from "react";
import { BsBell } from "react-icons/bs";
import "./TopNavbar.css";
import Dropdown from "../Dropdown/Dropdown";

const TopNavbar = ({ title }) => {


  return(
  <div className="navtop_container">
    <div>
      <p className="p__Inter">{title}</p>
    </div>

    <div className="top_container">
      <div className="top_content">
        <BsBell className="top_content_bell" />
        <span>2</span>
      </div>
       
<div className="dropdown_container">
<div className="dropdown_industries">
Industries 
{ dropdown && <Dropdown /> }
</div>
</div>

    </div>
  </div>
  )
};

export default TopNavbar;
