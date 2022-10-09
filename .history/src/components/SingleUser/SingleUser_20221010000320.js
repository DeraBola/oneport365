import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./SingleUser.css";

function SingleUser() {
  const params = useParams([]);

  const [users, setusers] = useState([])

  useEffect(() => {

    const getUserRequest = `https://demo3522726.mockable.io/get_customers/${params.id}` ;
       fetch(getUserRequest);
      .then((response) => response.json());
      .then((jsn) => setusers(json);
      console.log(responseJson);
    };

    getUserRequest();
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
            {
             users && (
              <div className="card" key={users.id}>
                <div className="image">
                  <img src={users.Avatar} alt="" />
                </div>
                <div className="card_content">
                  <h3>
                    {users.first_name}
                    {users.last_name}
                  </h3>
                  <h4>{users.email}</h4>
                  <h4>{users.phone}</h4>
                </div>
                <div className="card_edit">Edit</div>
              </div>
             )}
          </div>
          <div className="singleuser_middle"></div>
          <div className="singleuser_bottom"></div>
        </div>
      </section>
    </>
  );
}

export default SingleUser;
