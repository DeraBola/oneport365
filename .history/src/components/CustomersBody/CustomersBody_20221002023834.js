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
                 <th>LAST NAME</th>
                 <th>EMAIL ADDRESS</th>
                 <th>Phone number</th>
                 th
               </tr>
             </thead>
           </table>
        </div>
        
        
      </section >
    </>
  );


export default CustomersBody;
