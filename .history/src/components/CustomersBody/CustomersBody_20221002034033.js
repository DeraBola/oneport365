import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import "./CustomersBody.css";

const CustomersBody = () => {
  const [customers, setCustomers] = useState(second);

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
              <tr>
                <td>dera</td>
                <td>adu-barnabas</td>
                <td>adu.deraj@gmal.com</td>
                <td>08124969118</td>
                <td>Sep 03, 2022</td>
                <td>
                  <div>crab</div> <div>bread</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CustomersBody;