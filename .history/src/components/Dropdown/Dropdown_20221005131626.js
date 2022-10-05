import React, { useState } from "react";
import { DropdownData } from "../DropdownData.js";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {DropdownData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                onClick={() => setClick(false)}
                to={item.path}
                >
                <div className="icons"> <img src="" alt="" /> </div>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
