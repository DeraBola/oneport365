import React from "react";
import UploadedImg from "../../assets/img/Invoices.png"
import DropZone from "..";
import "./UploadDocument.css";

function UploadDocument() {

  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className="loaded_document">
      <div className="loaded_document_top">
        <div className="loaded_document_text">
          <p>Uploaded Document</p>
        </div>
        <div className="loaded_request">
          <div className="request_doc"> <p>Request Document</p></div>
          <div className="uploaded_doc" onClick={() => {
          setModalOpen(true);
        }} >
           <p>Upload Document</p> <img src={UploadedImg} alt="" />
         </div>
        </div>
        {modalOpen && <DropZone setOpenModal={setModalOpen} />}
      </div>
    </div>
  );
}

export default UploadDocument;
