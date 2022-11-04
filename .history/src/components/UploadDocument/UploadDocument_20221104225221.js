import React from 'react';
import { Link } from "react-router-dom";
import {UploadDocumentData } from "../../components/UploadDocumentData";
import "./UploadDocument.css";

function UploadDocument() {
  return (
    <div class> 
{ UploadDocumentData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                      <div className="shipments_bottom_nav">
                          <span>{item.title}</span>
                          </div>
                  </Link>
                </li>
              );
            })}
    </div>
  )
}

export default UploadDocument