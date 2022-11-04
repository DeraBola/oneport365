import React from 'react';
import { Link } from "react-router-dom";
import {UploadDocumentData } from "../../components/UploadDocumentData";

function UploadDocument() {
  return (
    <div> 
{ UploadDocumentData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
    </div>
  )
}

export default UploadDocument