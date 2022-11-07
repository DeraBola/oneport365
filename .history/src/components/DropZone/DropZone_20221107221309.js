import React, {useMemo}  from 'react'
 import "./DropZone.css"; 
 import {useDropzone} from 'react-dropzone';

 const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


function DropZone( {setOpenModal}, props ) {

  const {
    acceptedFiles,  
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept:  {
      'image/jpeg': [],
      'image/png': [] 
    }});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const acceptedFileItems = acceptedFiles.map(file => {(
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


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

        <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
      </aside>
    </div>

        <button>Continue</button>
      </div>
       
        
      </div>
    </div>
   
  )
}

export default DropZone