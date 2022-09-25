import React from "react";
import { BsBell } from "react-icons/bs";

const TopNavbar = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__Inter">{title}</p>
    <div className="top_container">
      <div className="top_content">
          <BsBell className="top_content_bell"/>
          <span className="top_content-number">2</span>
      </div>
      <div className="top_container_drop-down"></div>
    </div>
  </div>
);

export default TopNavbar;
