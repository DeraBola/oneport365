import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Rectangle from "../../assets/img/Line 18.png";
import Ecllipse from "../../assets/img/Ellipse 19.png";
import Arrowup from "../../assets/img/Icon (1).png";
import Arrowdown from "../../assets/img/Icon (1).png";
import Axios from "axios";
import "./Shipment.css";

const Shipment = () => {
  const [shipments, setShipments] = useState([]);

  const { shipmentid } = useParams();

  useEffect(() => {
    Axios.get(
      `https://demo3522726.mockable.io/get_single_customer_shipments/123456789?/${shipmentid}`
    )
      .then((res) => {
        console.log(res.data);
        setShipments(res.data);
      })
      .catch((err) => console.log(err));
  }, [shipmentid]);

  const shipmentImage = "import";

  return (
    <div className="tables_container">
      <table className="content_table">
        <thead>
          <tr>
            <th>SHIPMENT TYPE</th>
            <th>ORIGIN</th>
            <th> </th>
            <th>DESINATION </th>
            <th>SHIPMENT DATE </th>
            <th>SHIPPING ID </th>
            <th>SHIPMENT</th>
          </tr>
        </thead>
        <tbody>
          {shipments.filter((shipment) =>
          shipment.shipping_type)map((shipment) => (
            <tr key={shipment._id}>
              <td>
                {shipmentImage === "import" ? (
                  <div className="shipping_type"><img src={Arrowup} alt="arrowup" />{shipment.shipping_type}</div>
                ) : (
                  <div className="shipping_type"><img src={Arrowdown} alt="arrowup" />{shipment.shipping_type}</div>
                )}
              </td>
              <td>
                <div className="origin">
                  <div className="origin_code">{shipment.origin_port_code}</div>
                  <div className="origin_country">
                    {shipment.origin_port_city}, {shipment.origin_port_country}
                  </div>
                </div>
              </td>
              <td>
                <div className="rect_image">
                  <img src={Ecllipse} alt="Ecllipse" />
                  <img src={Rectangle} alt="rectangle" />
                  <img src={Ecllipse} alt="Ecllipse" />
                </div>
              </td>
              <td>
                <div className="destination">
                  <div className="destination_code">
                    {shipment.destination_port_code}
                  </div>
                  <div className="destination_country">
                    <div className="destination_city">
                      {shipment.destination_port_city},
                    </div>
                    <div className="destination_country">
                      {shipment.destination_port_country}{" "}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="shipping_date">
                  {shipment.shipment_pickup_date}
                </div>
              </td>
              <td>
                <div className="shipment_id">{shipment._id}</div>
              </td>
              <td>
                <div className="ship_edit">
                  <Link to={`/shipments/${shipment._id}`}>
                    <div className="ship-box">View Detail</div>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shipment;
