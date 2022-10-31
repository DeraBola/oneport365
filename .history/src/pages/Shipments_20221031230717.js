import React from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Axios from "axios";


function Shipments() {
  return (
    <>
      <TopNavbar title="Shipments" />
      <section className="customers_container">
        <div className="shipments_container">
          <div className="shipments_top">
            <div className="shipment_detials">

            </div>
            <div className="shpment_track"></div>
          </div>
          <div className="shipments_middle"></div>
          <div className="shipments_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default Shipments;
