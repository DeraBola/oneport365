import React from "react";
import { BsBell } from "react-icons/bs";
import Drimportpdown from 'react-bootstrap/Drimportpdown';
import ./T

const TopNavbar = ({ title }) => (
  <div className="navtop_container">
    <p className="p__Inter">{title}</p>

    <div className="top_container">
      <div className="top_content">
          <BsBell className="top_content_bell"/>
          <span className="top_content-number">2</span>
      </div>

      <div className="top_container_drop-down">
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    </div>
  </div>
);

export default TopNavbar;
