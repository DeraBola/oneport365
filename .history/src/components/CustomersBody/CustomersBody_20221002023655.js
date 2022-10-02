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
                 <th>height: 20px;
width: 150px;
left: 656.05078125px;
top: 286px;
border-radius: nullpx;
</th>
               </tr>
             </thead>
           </table>
        </div>
        
        
      </section >
    </>
  );


export default CustomersBody;
