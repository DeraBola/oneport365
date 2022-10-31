import React from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Axios from "axios";
import Arrowup from "../../assets/img/Icon (1).png";

function Shipments() {
  return (
    <>
      <TopNavbar title="Shipments" />
      <section className="customers_container">
        <div className="shipments_container">
          <div className="shipments_top">
            <div className="shipment_detials">
              <div className="shipment_detials_img">
                <img src={Arrowup} alt="arrowup" />
              </div>
              <div className="shipment_detials_text">shipment_detials</div>
            </div>
            <div className="shipment_track"></div>
          </div>
          <div className="shipments_middle"></div>
          <div className="shipments_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default Shipments;
