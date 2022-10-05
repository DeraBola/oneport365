import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import "./CustomersBody.css";

const CustomersBody = () => {
  const [customers, setCustomers] = useState();

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
          <table>
            <thead>
              <tr>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL ADDRESS</th>
                <th>Phone number</th>
                <th>LAST LOGIN</th>
                <th>SHIPMENT</th>
              </tr>
            </thead>
            <tbody>
                {customers.map(( customer, id ) => (
                  <tr key={id}>  
                <td> <img src={customer.Avatar} alt="avatar_img" srcset="" /> {customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone} </td>
                <td>{customer.is_active} </td>
                <td>
                  <div>Shipment</div> <div>Edit</div></td>
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
