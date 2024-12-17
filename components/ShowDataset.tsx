import React from "react";
import "@/styles/showDataset.css";

const ShowDataset = ({ dataset }: { dataset: string[][] | null }) => {
  return (
    <div className="datasetContainer">
      <h3>Uploaded Dataset</h3>
      {dataset ? (
        <div className="scrollableTableContainer">
          <table className="datasetTable">
            <thead>
              <tr>
                {dataset[0]?.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataset.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="noData">No data found</p>
      )}
    </div>
  );
};

export default ShowDataset;
