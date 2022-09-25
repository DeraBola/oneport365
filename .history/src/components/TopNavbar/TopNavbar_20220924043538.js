import React from 'react';
import { BsBell } from "react-icons/bs";


const TopNavbar = ({ title }) => (
    <div style={ {marginBottom: '1rem'} }>
         <p className="p__Inter">{title}</p>
         <div className="top_content">
             <div className="top_content_bell">
             <a href="#"></a>
             </div>
             <div className="top_content_drop-down"></div>
         </div>
        </div>
  );


export default TopNavbar