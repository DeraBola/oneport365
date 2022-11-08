import React,{useState} from "react";
import UploadedImg from "../../assets/img/Invoices.png"
import DropZone from "../../components/DropZone/DropZone";
import "./UploadDocument.css";

function UploadDocument() {

  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);

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
      </div>
      <div className="modal_container">
        {modalOpen && <DropZone setOpenModal={setModalOpen,}  setFile={} />}
      {file?.name}
      </div>  
    </div>
  );
}

export default UploadDocument;
