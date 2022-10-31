import React, { useState, useEffect } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import Arrowup from "../assets/img/Icon (1).png";

function Shipments() {
  const [singleShipments, setSingleShipments] = useState([]);

  useEffect(() => {
    const getUserRequest =
      "https://demo3522726.mockable.io/get_single_shipment_details/987654321";
    Axios.get(getUserRequest).then((json) => {
      console.log("json", json);
      setSingleShipments(json.data);
    });
  }, []);

  const fullDateMethod = (timestamp) => {
    const dateString = new Date(timestamp).toDateString()
    return `${dateString.replace(' ', ', ')}`
  }
  


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
              <div className="shipment_detials_text">shipment detials</div>
            </div>
            <div className="shipment_track">
              <div className="shipment_track_invoice"></div>
              <div className="shipment_track_update"></div>
            </div>
          </div>
          {singleShipments.map((singleShipment) => (
          <div className="shipments_middle">
              <div className="middle_one">
                <div className="middle_one_export">
                  <div className="middle_one_img ">
                    <img src={Arrowup} alt="arrowup" />
                  </div>
                  <div className="shipping_type_text">
                    {singleShipment.shipping_type}
                  </div>
                </div>
                <div className="middle_one_date"> {fullDateMethod(shipment.shipment_pickup_date)}</div>
              </div>
          </div> 
          ))}
          <div className="shipments_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default Shipments;
