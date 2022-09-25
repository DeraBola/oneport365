import React from 'react';

const TopNavbar = ({ title }) => (
    <div style={ {marginBottom: '1rem'} }>
         <p className="p__Inter">{title}</p>
         <div className="top_content">
             <div className="top_content_bell">

             </div>
             <div className="top_content_drop-dwn"></div>
         </div>
        </div>
  );


export default TopNavbar