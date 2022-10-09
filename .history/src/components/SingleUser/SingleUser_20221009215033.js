import React, { useState, useEffect } from "react";
import { json, Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TopNavbar from  "../TopNavbar/TopNavbar";
import "./SingleUser.css";


function SingleUser () {

  const params = useParams();

   const [users, setusers] = useState()

   useEffect(() => {
    const singleUserApiUrl = `https://demo3522726.mockable.io/get_customers/${params.id}`
    fetch(singleUserApiUrl)
    .then((response) => response.json())
    .then((json) => setusers(json))
    console.log("params", params);
  }, [params]);

  return (
  <>
    <TopNavbar title="Customers" />
    <section className="customers_container">
      <div className="singleuser_container">
        <div className="singleuser_top">
          <Link to="/customers">
            <div className="arrow">
              <BiArrowBack />
            </div>
          </Link>
          {users.map(( user, id ) => (
          <div className="card" key={id}>
<div className="image"><img src={} alt="" /></div>
<div className="card_content"></div>
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
