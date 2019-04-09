// import React from 'react';
// import styles from './styles.css';
// import axios from 'axios';
// const BASE_URL = 'http://localhost:8888';

// const ImageUploader = (props) => {
//     return (
//         <div>
//             <br/>
//             <div className="col-sm-12">
//             <h1>Image Uploader</h1><hr/>
//             <div className="col-sm-4">
//             <input className="form-control " type="file"
//             onChange={props.selectImages} multiple/>
//             </div>
//             <p className="text-info">{props.message}</p>
//             <br/><br/><br/>
//             <div className="col-sm-4">
//             <button className="btn btn-primary" value="Submit" 
//             onClick={props.uploadImages}>Submit</button>
//             </div>
//             </div>
//             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/><br/>
//             <div className="row col-lg-12">
//             { 
//             props.imageUrls.map((url, i) => (
//             <div className="col-lg-2" key={i}>
//             <img src={BASE_URL + url} className="img-rounded img-responsive"
//             alt="not available"/><br/>
//             </div>
//             ))
//             }
//             </div>
//         </div>
//     )           
//   };

//   module.exports = ImageUploader; 