import React, { useEffect } from "react";
import { BsBell } from "react-icons/bs";
import "./TopNavbar.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import OnePort365 from "../../assets/img/OnePort365 logo.png";

const TopNavbar = ({ title }) => {

useEffect(() => {
  $( "#speed" ).selectmenu();
}, [])


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
      <select name="speed" id="speed">
      <option   >Slower</option>
      <option>Slow</option>
      <option selected="selected">Medium</option>
      <option>Fast</option>
      <option>Faster</option>
    </select>
         
    </div>
  </div>
  )
};

export default TopNavbar;
