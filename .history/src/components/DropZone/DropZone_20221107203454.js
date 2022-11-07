import React from 'react'
 import "./DropZone.css";  

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

        <button>Continue</button>
      </div>
       
        
      </div>
    </div>
   
  )
}

export default DropZone