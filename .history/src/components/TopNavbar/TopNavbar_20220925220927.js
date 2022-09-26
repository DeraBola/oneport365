import React, { useEffect } from "react";
import { BsBell } from "react-icons/bs";
import "./TopNavbar.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
imp  ort OnePo 

const TopNavbar = ({ title }) => {

useEffect(() => {
  $( "#speed" ).selectmenu();
}, []);


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

</div>

    </div>
  </div>
  )
};

export default TopNavbar;
