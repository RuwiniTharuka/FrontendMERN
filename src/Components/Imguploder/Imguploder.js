import React from "react";
import { useState } from "react";
import { Document, Page} from "react-pdf";

function PdfComp(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <div>
        {props.pdfFile ? (
          <Document
            file={"props.pdfFile"}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => {
                return (
                  <Page
                    pageNumber={page}
                    renderTextLayer={false}
                    renderAnotationLayer={false}
                  />
                );
              })}
            <Page pageNumber={pageNumber} />
          </Document>
        ) : (
          <p>Pdf File Not Available</p>
        )}
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}

export default PdfComp;

// import React, { useEffect, useState } from 'react'
// import Nav from '../Nav/Nav'
// import axios from 'axios';
// import { data } from 'react-router-dom';

// function Imguploder() {
//     const [image, setImage] = useState(null);
//     const [allImage, setAllImage] = useState(null);
//     const submitImg = async (e) =>{
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("image",image);
//         const result = await axios.post(
//             "http://localhost:5000/uplodeImg",
//             formData, {
//                 headers: {"Content-Type":"multipart/form-data"},
//             });
//             getImage();
//         };
    
//     const onImgChange = (e) => {
//             setImage(e.target.files[0]);
//     };
//     const getImage = async () => {
//             try{
//                 const result = await axios.get("http://localhost:5000/getImage");
//                 setAllImage(result.data.data);
//             }catch(e){
//                 console.error("Error getting image", e);
//             }
//     };
// useEffect(()=>{
//     getImage();
// },[]);

//   return (
//     <div>
//         <Nav />
//       <h1>Img Part</h1>
//       <form onSubmit={submitImg}>
//         <input type="file" accept='image/*' onChange={onImgChange}></input>
//         <button type="submit">Upload</button>
//       </form>

//       {allImage === null ?"" : allImage.map((data)=>(
//         <img key={data._id}
//             src={`http://localhost:5000/files/${data.image}`}
//             height={100}
//             width={100}
//             alt="photos"
//             ></img>
//       ))}
//     </div>
//   );
// }
// export default Imguploder;

