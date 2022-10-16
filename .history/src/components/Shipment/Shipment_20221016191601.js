import React,{ useState, useEffect } from 'react';
import Axios from "axios";

function Shipment() {
    const [singleshipment, setSingleshipment] = useState([]);


    
  return (
    <div>
              <table className="content_table" key={singleshipment._id}>
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
                  <tr>
                    <td>{singleshipment.shipping_type}</td>
                    <td>{singleshipment.delivery_location} </td>
                    <td>{singleshipment.delivery_location} </td>
                    <td> {singleshipment.delivery_location}</td>
                    <td>-</td>
                    <td>
                      <div className="ship_edit">
                        <div className="ship-box">View Detail</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
    </div>
  )
}

export default Shipment