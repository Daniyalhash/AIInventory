"use client";
// app/dashboard/page.tsx
import VendorOver from "@/components/VendorOver"
import VendorOver2 from "@/components/VendorOver2"

import ButtonFrame2 from "@/components/ButtonFrame2";
import "@/styles/vendor.css";
import ShowDataset2 from "@/components/ShowDataset";

import ButtonAction2 from "@/components/ButtonAction2";
import { useState } from "react";
import VisualGroupInventory from "@/components/VisualGroupInventory";
import VendorManagementAnalysis from "@/components/VendorManagementAnalysis";
export default function Vendor() {
    const [action, setAction] = useState<string | null>(null);
    const [dataset, setDataset] = useState<string[][] | null>(null);
  
    const handleActionClick2 = (actionName: string) => {
      setAction(actionName);
    };
  
    const handleFileUpload2 = (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const rows = content.split("\n").map((row) => row.split(","));
        setDataset(rows);
      };
      reader.readAsText(file);
    };
    return (
      <div className="VendorPage">
      <VendorOver />
      <ButtonFrame2 onActionClick={handleActionClick2} />
      <div className="actionContainerVendor2">
        <ButtonAction2 action={action} onFileUpload={handleFileUpload2} />
      </div>
        {/* Dataset Section with a Specific Class */}
        <div className="dataset-feature2">
        <ShowDataset2 dataset={dataset} />
      </div>
      <VendorOver2 />
      <div className="visual-feature2">

        <VendorManagementAnalysis />

      </div>
      </div>
    );
  }
  