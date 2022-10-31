  
import { Link } from "react-router-dom";
import Rectangle from "../../assets/img/Line 18.png";
import Ecllipse from "../../assets/img/Ellipse 19.png";
import Arrowup from "../../assets/img/Icon (1).png";
import Arrowdown from "../../assets/img/Icon.png";
import "./ShipmentUser.css";

const ShipmentUser = (props) => {

  const fullDateMethod = (timestamp) => {
  const dateString = new Date(timestamp).toDateString()
  return `${dateString.replace(' ', ', ')}`
}

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
          {props.shipments.map((shipment) => (
            <tr key={shipment._id}>
              <td>
                {shipment.shipping_type === "import" ? (
                  <div className="shipping_type">
                   <div className="shipping_type_img "><img src={Arrowup} alt="arrowup" /></div> 
                   <div className="shipping_type_text">{shipment.shipping_type}</div>
                  </div>
                ) : (
                  <div className="shipping_type">
                   <div className="shipping_type_img "> <img src={Arrowdown} alt="arrowup" /></div>
                   <div className="shipping_type_text">{shipment.shipping_type}</div>
                  </div>
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
                      {shipment.destination_port_city}
                    </div>
                    <div className="destination_country">
                      {shipment.destination_port_country}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="shipping_date">
                  {fullDateMethod(shipment.shipment_pickup_date)}
                </div>
              </td>
              <td>
                <div className="shipment_id">{shipment._id.slice(5)}</div>
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

export default ShipmentUser;
