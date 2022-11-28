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

        <div className="tables_container .table-responsive ">
          <table  className="content_table">
            <thead>
              <tr>
              <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>EMAIL ADDRESS</th>
                  <th>PHONE NUMBER</th>
                  <th>LAST LOGIN</th>    
              </tr>
            </thead>
            <tbody>
                {customers.map(( customer) => (
                  <tr key={customer.id}  >  
                <td> <div className="avatar_image" ><img src={customer.Avatar} alt="avatar_img" /> {customer.first_name}</div> </td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td><div className="customer_phone">{customer.phone}</div> </td>
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
