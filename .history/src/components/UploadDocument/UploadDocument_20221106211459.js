import React from "react";

import "./UploadDocument.css";

function UploadDocument() {
  return (
    <div className="loaded_document">
      <div className="loaded_document_top">
        <div className="loaded_document_text">
          <p>Uploaded Document</p>
        </div>
        <div className="loaded_request">
          <div className="request_doc"> p Request Document</div>
          <div className="uploaded_doc">Upload Document</div>
        </div>
      </div>
    </div>
  );
}

export default UploadDocument;
