import React from 'react'
import TopNavbar from "../TopNavbar/TopNavbar";
import Axios from "axios";
import "./Shipments.css";

function Shipments() {
  return (
    <>
    <TopNavbar title="Shipments" />
    <section className="customers_container"> 
    <div className="shipments_t "></div>
    </section>
    </>
  )
}

export default Shipments