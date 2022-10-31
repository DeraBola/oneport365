import React from "react";
import TopNavbar from ".";
import Axios from "axios";
import "./Shipments.css";

function Shipments() {
  return (
    <>
      <TopNavbar title="Shipments" />
      <section className="customers_container">
        <div className="shipments_container">
          <div className="shipments_top">

          </div>
        </div>
      </section>
    </>
  );
}

export default Shipments;
