import React from "react";
import Uploadedimg from "../../assets/"
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
          <div className="uploaded_doc"> <p>Upload Document</p> <img src={} alt="" /> </div>
        </div>
      </div>
    </div>
  );
}

export default UploadDocument;
