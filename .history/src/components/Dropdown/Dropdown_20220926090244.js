import React, { useState } from 'react'
import { DropdownData } from "./DropdownData";
import "./Dropdown.css"

function Dropdown() {
const [ click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
      <>
    <ul onClick={ handleClick }
    className={ click ? dropdown-menu clicked:  } >

    </ul>
    </>
  )
}

export default Dropdown