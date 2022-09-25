import React from "react";
import { BsBell } from "react-icons/bs";
import "./TopNavbar.css";
import OnePort365 from "../../assets/img/OnePort365 logo.png";

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

       
        <select className="top_container_select" name="" id="">
          <option className="top_container_select-img" value="">
          Temoc
          </option>
          <option value="">Oil and Gas</option>
          <option value="">IT</option>
        </select>
    </div>
  </div>
);

export default TopNavbar;
