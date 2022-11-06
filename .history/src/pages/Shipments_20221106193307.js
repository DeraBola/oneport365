import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import Arrowup from "../assets/img/Icon (1).png";
import Rectangle from "../assets/img/Line 18.png";
import Ecllipse from "../assets/img/Ellipse 19.png";
import UploadDocument  from "../components/UploadDocument/UploadDocument";
 


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

  const [active, setActive] = useState("firstCard")
  return (
    <>
      <TopNavbar title="Shipments" />
      <section className="customers_container">
        <div className="shipments_container">
          <div className="shipments_top">
            <div className="shipment_detials">
            <Link to="singleusers">
              <div className="shipment_detials_img">
                <BiArrowBack />
              </div>
              </Link>
              <div className="shipment_detials_text">
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
                    <div className="shipments_middle_one_img ">
                      <img src={Arrowup} alt="arrowup" />
                    </div>
                  <div className="shipments_middle_one_text">
                    <p>{singleShipment.shipping_type}</p>
                  </div>
                </div>
                <div className="shipments_middle_one_date">
                  <p>{DateMethod(singleShipment.shipment_pickup_date)}</p>
                </div>
                <div className="shipments_middle_one_shipmentID">
                  <p>ShipmentID</p>
                  <p>{singleShipment._id}</p>
                </div>
              </div>

              <div className="shipment_middle_two">
                <div className="shipment_middle_two_port">
                  <h2>Port of Discharge </h2>
                  <div className="destination_port">
                    <p>{singleShipment.destination_port_code}</p>
                    <div className="destination_port_city_country">
                      <p>{singleShipment.destination_port_city}</p>,
                      <p>{singleShipment.destination_port_country}</p>
                    </div>
                  </div>
                </div>
                <div className="shipment_middle_two_img">
                <img src={Ecllipse} alt="Ecllipse" />
                  <img src={Rectangle} alt="rectangle" />
                  <img src={Ecllipse} alt="Ecllipse" />
                </div>
                <div className="shipment_middle_two_delivery ">
                  <h2>delivery location</h2>
                  <div className="delivery_port">
                    <p>{singleShipment.cargo_description}</p>
                    <div className="destination_port_city_country">
                      <p>{singleShipment.local_government }</p>,
                      <p>{singleShipment.state}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="shipments_bottom">
            <nav className="upload_document"  >
            <li key={index} className={item.cName}><li
              <button onClick={() => setActive("FirstCard")}>Documents</button>
              <button onClick={() => setActive("SecondCard")}>Cargo Detials </button>
              <button onClick={() => setActive("ThirdCard")}>Additional Services</button>
              <button onClick={() => setActive("FourthCard")}>Rates</button>

            </nav>
          <UploadDocument />
          </div>
        </div>
      </section>
    </>
  );
}

export default Shipments;
