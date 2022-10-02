import React from "react";
import { BsPlusLg } from "react-icons/bs";
import ""

const CustomersBody = () => (
    <>
      <section className="customersbody_container">
        
        <div className="add_button_container">
          <button className="add_button">
            Add Customer <BsPlusLg /> 
          </button>
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
