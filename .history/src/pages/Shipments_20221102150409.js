import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import Arrowup from "../assets/img/Icon (1).png";

function Shipments() {
  const [singleShipment, setSingleShipment] = useState([]);

  useEffect(() => {
    const getUserRequest =
      "https://demo3522726.mockable.io/get_single_shipment_details/987654321";
    Axios.get(getUserRequest).then((json) => {
      console.log("json", json);
      setSingleShipment(json.data);
    });
  }, []);

  const DateMethod = (timestamp) => {
    const dateString = new Date(timestamp).toDateString();
    return `${dateString.replace(" ", ", ")}`;
  };

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
              <div className="shipment_detials_text">
                {" "}
                <p> Shipment Details</p>
              </div>
            </div>

            <div className="shipment_track">
              <div className="shipment_track_invoice">
                <p>Invoice</p>
              </div>
              <div className="shipment_track_update">
                <p>Track/Update Shipment</p>
              </div>
            </div>
          </div>

          {singleShipment && (
            <div className="shipments_middle">

              <div className="shipments_middle_one">
                <div className="shipments_middle_one_export_img">
                <Link to="/customers">
                  <div className="shipments_middle_one_img ">
                    <img src={Arrowup} alt="arrowup" />
                  </div>
                  </Link>
                  <div className="shipments_middle_one_text">
                  <p>{singleShipment.shipping_type}</p>   
                  </div>
                </div>
                <div className="shipments_middle_one_date">
                <p></p>  {DateMethod(singleShipment.shipment_pickup_date)}
                </div>
                <div className="shipments_middle_one_shipmentID">
                  {singleShipment._id}
                </div>
              </div>

<div className="shipment_middle_two"></div>
            </div>
          )}
          <div className="shipments_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default Shipments;
