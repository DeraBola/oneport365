 import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleUser() {
 const params = useParams();

useEffect(() => {
  console.log("params", params)
}, [params])


  return (
    <div  className='customers_container' > 
.singleuser



    
    </div>
  )
}

export default SingleUser