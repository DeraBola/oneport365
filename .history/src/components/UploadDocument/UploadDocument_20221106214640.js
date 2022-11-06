import React from "react";
import UploadedImg from "../../assets/img/Invoices.png"
import "./UploadDocument.css";

function UploadDocument() {
  return (
    <div className="loaded_document">
      <div className="loaded_document_top">
        <div className="loaded_document_text">
          <p>Uploaded Document</p>
        </div>
        <div className="loaded_request">
          <div className="request_doc"> <p>Request Document</p></div>
          <div className="uploaded_doc"> <p>Upload Document</p> <img src={UploadedImg} alt="" /> </div>
        </div>
      </div>
    </div>
  );
}

export default UploadDocument;
