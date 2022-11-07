import React, {useMemo}  from 'react'
 import "./DropZone.css"; 
 import {useDropzone} from 'react-dropzone';

  
function DropZone( {setOpenModal}, props ) {
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
          <h1>Document Upload </h1>
          <p>Files uploaded are displayed here</p>
        </div>

        <div className="body">
          <p>Select Document type to upload</p>
        </div>
        <div className="footer">
           
          
          <button>Continue</button>
        </div>
      </div>
    </div>
}
export default DropZone ;