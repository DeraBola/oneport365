import React, {useMemo}  from 'react'
 import "./DropZone.css"; 
 import {useDropzone} from 'react-dropzone';

function DropZone( {setOpenModal}, props ) {

   


  return (
    <div className="modalBackground">
    <div className="modalContainer">

      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>

      <div className="title">
        <h1>Documents Upload</h1>
        <p>Uploaded documents are displayed here</p>
      </div>
      <div className="body">
        <p>Select Document type to upload</p>

        <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>

        <button>Continue</button>
      </div>
       
        
      </div>
    </div>
   
  )
}

export default DropZone