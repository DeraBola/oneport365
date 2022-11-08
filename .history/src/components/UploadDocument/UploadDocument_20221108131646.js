import React,{useState} from "react";
import UploadedImg from "../../assets/img/Invoices.png"
import DropZone from "../../components/DropZone/DropZone";
import "./UploadDocument.css";

function UploadDocument() {

  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedfile, setuploadedFile] = useState([]);

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
        {modalOpen && <DropZone setOpenModal={setModalOpen} 
        setFile={setFile}
         File={File} 
         setuploadedFile={setuploadedFile}
         uploadedFile={uploadedfile} 
           />}

{uploadedfile.map((uploadedfiles) => (
  <p  className="p__Inter ">{ uploadedfiles?  uploadedfiles[0].name:''}</p>
  Src={'URL.createObjectURL(fle'}
))}
     
      </div>  
    </div>
  );
}

export default UploadDocument;
