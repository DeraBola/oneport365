import React,{ useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import "./ShingleUser.css";

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

  return (
    <div className="tables_container" >
              <table className="content_table" >
                <thead>
                  <tr>
                    <th>SHIPMENT TYPE</th>
                    <th>ORIGIN</th>
                    <th>DESINATION </th>
                    <th>SHIPMENT DATE </th>
                    <th>SHIPPING ID </th>
                    <th>SHIPMENT</th>
                  </tr>
                </thead>
                <tbody>
                { shipments.map(( shipment ) => (   
                  <tr key={shipment._id} >
                    <td>{shipment.shipping_type}</td>
                    <td>{shipment.delivery_location} </td>
                    <td>{shipment.delivery_location} </td>
                    <td> {shipment.delivery_location}</td>
                    <td>-</td>
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

export default Shipment