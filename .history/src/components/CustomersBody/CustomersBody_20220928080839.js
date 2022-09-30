import React from "react";
import { BsPlusLg } from "react-icons/bs";

function CustomersBody() {
  return (
    <>
      <div className="customersbody_container">
        <div className="add_button_">
          <button className="add_button">
            Add Customer <BsPlusLg />{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomersBody;
