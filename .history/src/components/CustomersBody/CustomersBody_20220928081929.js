import React from "react";
import { BsPlusLg } from "react-icons/bs";

function CustomersBody() {
  return (
    <>
      <section className="customersbody_container">
        <div className="add_button_container">
          <button className="add_button">
            Add Customer <BsPlusLg />{" "}
          </button>
        </div>
      </section >
    </>
  );
}

export default CustomersBody;
