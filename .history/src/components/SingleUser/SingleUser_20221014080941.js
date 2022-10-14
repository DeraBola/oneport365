import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import TopNavbar from "../TopNavbar/TopNavbar";
import Axios from 'axios';
import "./SingleUser.css";

function SingleUser() {
  const { id } = useParams();

  const [users, setusers] = useState([]);
  
const [singleshipment, setSingleshipment] = useState([]);

  useEffect(() => {
    const getUserRequest = `https://demo3522726.mockable.io/get_single_customer/123456789?/${id}`;
    fetch(getUserRequest)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setusers(json);
      });
  }, [id]);

useEffect(() => {
  Axios.get(`https://demo3522726.mockable.io/get_single_customer_shipments/123456789?/${id}`)
  .then(res => console.log(res.data)).catch(err => console.log(err))
}, [id]);




  return (
    <>
      <TopNavbar title="Shipments" />
      <section className="customers_container">
        <div className="singleuser_container">
          <div className="singleuser_top">
            <Link to="/customers">
              <div className="arrow">
                <BiArrowBack />
              </div>
            </Link>
            {users && (
              <div className="card" key={users.id}>
                <div className="card_content">
                  <div className="card_image">
                    {" "}
                    <img src={users.Avatar} alt="" />
                  </div>
                  <div className="card_details">
                    <h2>
                      {users.first_name}
                      {users.last_name}
                    </h2>
                    <h3>{users.email}</h3>
                    <h3>{users.phone}</h3>
                  </div>
                </div>
                <div className="card_edit">
                  <p>Edit</p>
                </div>
              </div>
            )}
          </div>
          <div className="singleuser_middle">
            <div className="singleuser_middle_content">
              <div className="new_shipment">
                <p>Add New Shipment</p>
                <p>
                  <BsPlus />
                </p>
              </div>
              <div className="shipment_type">
                <select name="" id="type">
                  <option value="">Shipment Type</option>
                  <option value="">Shipment Type</option>
                  <option value="">Shipment Type</option>
                </select>
              </div>
              <div className="shipment_date">
                <select name="" id="type">
                  <option value="">Shipment Date</option>
                  <option value="">Shipment Date</option>
                  <option value="">Shipment Date</option>
                </select>
              </div>
            </div>
            <div className="single_user_search">
              <div className="search_icons">
                <MdSearch />
              </div>
              <input
                type="text"
                placeholder="Search by Shipment,ID,Destination"
              />
            </div>
          </div>
          <div className="singleuser_bottom">
            <table className="content_table">
              <thead>
                <tr><th>SHIPMENT TYPE</th>
                <th>ORIGIN</th>
                <th>DESINATION </th>
                <th>SHIPMENT DATE </th>
                <th>SHIPPING ID  </th>
                <th>SHIPMENT</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <div className="avatar_image">
                        <img src={customer.Avatar} alt="avatar_img" />
                        {customer.first_name}
                      </div>
                    </td>
                    <td>{customer.last_name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone} </td>
                    <td>-</td>
                    <td>
                      <div className="ship_edit">
                        <Link to={`/singleuser/${customer.id}`}>
                          {" "}
                          <div className="ship-box">Shipment</div>{" "}
                        </Link>
                        <div className="edit-box"> Edit</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleUser;
