import React,{useState} from "react";
import UploadedImg from "../../assets/img/Invoices.png"
import DropZone from "../../components/DropZone/DropZone";
import { IoDocumentText } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
import "./UploadDocument.css";

function UploadDocument() {

  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedfile, setuploadedFile] = useState([]);

  const removeFile = File >

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
         File={file} 
         setuploadedFile={setuploadedFile}
         uploadedFile={uploadedfile} 
           />}

{uploadedfile.map((uploadedfiles) => (
  <>
  <div className="dropzone_content">
    <div className="dropzone_file">
      <div className="file_icon"><IoDocumentText /></div>
  <p className=" file_text ">{uploadedfiles ? uploadedfiles[0].name : ''}</p>
  <img Src={'URL.createObjectURL(file[0])'} alt="" /> 
  </div>
    <div className="dropzone_delete">
    <BiTrash />
    </div>
  </div>
  </>
))}
     
      </div>  
    </div>
  );
}

export default UploadDocument;
