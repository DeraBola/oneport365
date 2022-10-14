import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./SingleUser.css";

function SingleUser() {
  const { id } = useParams();

  const [users, setusers] = useState([]);

  useEffect(() => {
    const getUserRequest = `https://demo3522726.mockable.io/get_single_customer/123456789?/${id}`;
    fetch(getUserRequest)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setusers(json);
      });
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
              .se
              <MdSearch className="search-icons" size="2em" />
              <input type="text" placeholder="Search by Shipment,ID,Destination" />
            </div>
          </div>
          <div className="singleuser_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default SingleUser;
