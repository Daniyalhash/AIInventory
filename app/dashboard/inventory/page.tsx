"use client";
import InventoryOver from "@/components/InventoryOver";
import InventoryOver2 from "@/components/InventoryOver2";

import "@/styles/inventory.css";
import ButtonFrame from "@/components/ButtonFrame";
import ButtonAction from "@/components/ButtonAction";
import ShowDataset from "@/components/ShowDataset";

import { useState } from "react";
import VisualGroupInventory from "@/components/VisualGroupInventory";

function Inventory() {
  const [action, setAction] = useState<string | null>(null);
  const [dataset, setDataset] = useState<string[][] | null>(null);

  const handleActionClick = (actionName: string) => {
    setAction(actionName);
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const rows = content.split("\n").map((row) => row.split(","));
      setDataset(rows);
    };
    reader.readAsText(file);
  };

  return (
    <div className="InventoryPage">
      <InventoryOver />
      <ButtonFrame onActionClick={handleActionClick} />

      <div className="actionContainer">
        <ButtonAction action={action} onFileUpload={handleFileUpload} />
      </div>

      {/* Dataset Section with a Specific Class */}
      <div className="dataset-feature">
        <ShowDataset dataset={dataset} />
      </div>
      <InventoryOver2 />
      <div className="visual-feature">

        <VisualGroupInventory />

      </div>


    </div>
  );
}

export default Inventory;
