import React, {useCallback}  from 'react'
 import "./DropZone.css"; 
 import {useDropzone} from 'react-dropzone';

  
function DropZone( {setOpenModal}, props ) {

  const onDrop = useCallback((acceptedFiles) => {
    
  })

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return(
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
           
        <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
          
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}
export default DropZone ;