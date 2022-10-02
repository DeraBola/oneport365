import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "./CustomersBody.css"

const CustomersBody = () => (
    <>
      <section className="customersbody_container">
        
        <div className="add_button_container">
          <div className="add_button">
            Add Customer <BsPlusLg /> 
          </>
        </div>

        <div className="tables_container">
          <button className="customers">
             Tables
          </button>
        </div>
        
        
      </section >
    </>
  );


export default CustomersBody;
