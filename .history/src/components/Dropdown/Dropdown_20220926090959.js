import React, { useState } from 'react'
import { DropdownData } from "../DropdownDataDropdownDataData";
import "./Dropdown.css"

function Dropdown() {
const [ click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
      <>
    <ul onClick={ handleClick }
    className={ click ? 'dropdown-menu clicked' :  'dropdown-menu' } >

{DropdownData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} >
               <div className="icons">{item.image } </div>  
                <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

    </ul>
    </>
  )}

export default Dropdown