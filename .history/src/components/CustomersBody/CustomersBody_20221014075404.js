import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CustomersBody.css";

const CustomersBody = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomersRequest = async () => {
    const url = "https://demo3522726.mockable.io/get_customers";

    const response = await fetch(url);
    const responseJson = await response.json();
    setCustomers(responseJson);
    console.log(responseJson);
  };

  useEffect(() => {
    getCustomersRequest();
  }, []);

  return (
    <>
      <section className="customersbody_container">
        <div className="add_button_container">
          <div className="add_button">
            <p> Add Customer </p> <BsPlusLg />
          </div>
        </div>

        <div className="tables_container">
          <table  className="content_table">
            <thead>
              <tr>
                <th>SHIPMENT TYPE</th>
                <th>ORIGIN</th>
                <th>DESINATION </th>
                <th>SHIPMENT DATE </th>
                <th>LAST LOGIN</th>
                <th>SHIPMENT</th>
              </tr>
            </thead>
            <tbody>
                {customers.map(( customer) => (
                  <tr key={customer.id}  >  
                <td> <div className="avatar_image" ><img src={customer.Avatar} alt="avatar_img" /> {customer.first_name}</div> </td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone} </td>
                <td>-</td>
                <td >
                  <div className="ship_edit" >
                  <Link to={`/singleuser/${customer.id}`}> <div className="ship-box">Shipment</div> </Link> 
                  <div className="edit-box"> Edit</div>
                    </div>
                  </td>
                  </tr>
                  ))}    
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CustomersBody;
