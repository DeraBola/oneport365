import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import "./SingleUser.css";


function SingleUser () {

  const params = useParams();

  const [const user = u(second)]

  useEffect(() => {
    console.log("params", params);
  }, [params]);

  return (
    <section className="customers_container">
      <div className="singleuser_container">
        <div className="singleuser_top">
          <Link to="/customers">
            <div className="arrow">
              <BsFillArrowLeftSquareFill />
            </div>
          </Link>
          <div className="card"></div>
        </div>
        <div className="singleuser_middle"></div>
        <div className="singleuser_bottom"></div>
      </div>
    </section>
  );
}

export default SingleUser;
