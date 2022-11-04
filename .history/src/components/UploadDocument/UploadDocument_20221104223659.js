import React from 'react';
import { Link } from "react-router-dom";
import {UploadDocumentData } from "../../components/UploadDocumentData";

function UploadDocument() {
  return (
    <div> 
{ .map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className="icons">{item.image} </div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
    </div>
  )
}

export default UploadDocument