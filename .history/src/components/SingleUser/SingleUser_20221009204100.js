import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleUser() {
  const params = useParams();

  useEffect(() => {
    console.log("params", params);
  }, [params]);

  return (
    <div className="customers_container">
      <div className="singleuser_container">
        <div className="singleuser_top"></div>
        <div className="singleuser_middle"></div>
        <div className="singleuser_bottom"></div>
      </div>
    </div>
  );
}

export default SingleUser;
