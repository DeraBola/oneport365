import React, { useState } from 'react'
import { DropdownData } from "./DropdownData";
import "./Dropdown.css"

function Dropdown() {
const [ click, setClick] = useState(false)
const handleClck = () => setClick(! click)

  return (
    <div>Dropdown</div>
  )
}

export default Dropdown