import '@/styles/SignupPage.css';
import { useState } from 'react';

const DatasetUpload = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      alert(`Dataset "${file.name}" uploaded successfully!`);
      onUploadComplete(); // Move to next step
    } else {
      alert('Please upload a file.');
    }
  };

  const handleShowModal = () => {
    setShowModal(true); // Show the modal with the requirements
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="stepContainer">
      <p className="subtext">Upload your Data</p>

      <input type="file" onChange={handleFileUpload} className="fileInput" />
      {/* Button to open the modal */}
      {/* <button onClick={handleShowModal} className="warning">Dataset Requirements</button> */}
      <button onClick={handleSubmit} className="iconButton">Submit CSV</button>
      
      

      {/* Modal for showing dataset requirements */}
      {/* {showModal && (
        <div className="modal">
          <div className="modalContent">
            <h3>Dataset Requirements</h3>
            <p><strong>Warning:</strong> Please ensure that your dataset is in CSV format and includes the following columns:</p>
            <ul>
              <li>Product Name</li>
              <li>Category</li>
              <li>Cost Price</li>
              <li>Selling Price</li>
              <li>Timespan</li>
              <li>Barcode</li>
              <li>Vendor Name</li>
              <li>Vendor ID</li>
              <li>Reliability Score</li>
              <li>Delivery Time</li>
            </ul>
            <p>Failure to follow this format could result in complications during the upload process.</p>
            <button onClick={handleCloseModal} className="modalCloseButton">Close</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default DatasetUpload;
