import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./SingleUser.css";

function SingleUser() {
  const params = useParams();

  const [users, setusers] = useState([]);

  const getUserRequest = async () => {
    const url = `https://demo3522726.mockable.io/get_customers/${params.id}` ;
    const response = await fetch(url);
    const responseJson = await response.json();
    setUsers(responseJson);
    console.log(responseJson);
  };

  useEffect(() => {
     
    console.log("params", params);
  }, [params]);

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
            {users.map((user) => (
              <div className="card" key={user.id}>
                <div className="image">
                  <img src={user.Avatar} alt="" />
                </div>
                <div className="card_content">
                  <h3>
                    {user.first_name}
                    {user.last_name}
                  </h3>
                  <h4>{user.email}</h4>
                  <h4>{user.phone}</h4>
                </div>
                <div className="card_edit">Edit</div>
              </div>
            ))}
          </div>
          <div className="singleuser_middle"></div>
          <div className="singleuser_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default SingleUser;
