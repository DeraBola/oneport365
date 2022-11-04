import React, { useState, useEffect } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import Arrowup from "../../assets/img/Icon (1).png";

function Shipments() {

  const [singleShipment, setsingleShipment ] = useState([]);

  useEffect(() => {
    const getUserRequest = "https://demo3522726.mockable.io/get_single_customer/123456789";
    Axios.get(getUserRequest)
      .then((json) => {
        console.log('json', json);
        setusers(json.data);
      });
  }, [id]);


  return (
    <>
      <TopNavbar title="Shipments" />
      <section className="customers_container">
        <div className="shipments_container">
          <div className="shipments_top">
            <div className="shipment_detials">
              <div className="shipment_detials_img">
              <BiArrowBack /> 
              </div>
              <div className="shipment_detials_text">shipment_detials</div>
            </div>
            <div className="shipment_track">
              <div className="shipment_track_invoice"></div>
              <div className="shipment_track_update"></div>
            </div>
          </div>
          <div className="shipments_middle"></div>
          <div className="shipments_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default Shipments;