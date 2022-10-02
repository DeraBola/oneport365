import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "./CustomersBody.css"

const CustomersBody = () => (
    <>
      <section className="customersbody_container">
        
        <div className="add_button_container">
          <div className="add_button">
           <p> Add Customer </p>  <BsPlusLg />
          </div>
        </div>

        <div className="tables_container">
           <table>
             <thead>
               <tr>
                 <th>FIRST NAME</th>
               </tr>
             </thead>
           </table>
        </div>
        
        
      </section >
    </>
  );


export default CustomersBody;
