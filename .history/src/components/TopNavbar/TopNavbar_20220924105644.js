import React from "react";
import { BsBell } from "react-icons/bs";
import 
import "./TopNavbar.css";

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
         
      </div>
    </div>
  </div>
);

export default TopNavbar;
