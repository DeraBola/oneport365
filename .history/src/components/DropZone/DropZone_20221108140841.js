import React, { useCallback } from "react";
import "./DropZone.css";
import { useDropzone } from "react-dropzone";

function DropZone({ setOpenModal, setFile, file, setuploadedFile, uploadedFile  } ) {
  const onDrop = useCallback((acceptedFiles, ) => {
    console.log(acceptedFiles);
    console.log(file);
    setFile(acceptedFiles) 
    setuploadedFile(uploadedFile => [...uploadedFile, file])
    console.log(uploadedFile );
    setOpenModal(false)
  }, [file]);

  const { getRootProps, getInputProps, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept:{
        "image/*": ['.jpg', '.png']
      }, 
    });

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
          <h1>Document Upload </h1>
          <p>Files uploaded are displayed here</p>
        </div>

        <div className="body">
          <p>Select Document type to upload</p>
        </div>

        <div className="footer">
          <div {...getRootProps()} className="drop_box">
            <input {...getInputProps()} />

            <div className="dragdrop_text">
              {isDragReject ? (
                <p>Sorry, this file only accepts images and gif</p>
              ) : (
                <>
                  <p>
                    <span>Click to upload a file</span>or drag and drop
                  </p>
                  <h2>PNG, JPG, , GIF upto 5MB</h2>
                </>
              )}
            </div>
          </div>
          <button >Upload</button>
        </div>
      </div>
    </div>
  );
}
export default DropZone;
