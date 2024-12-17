'use client';
import { useState } from 'react';
import UserCredentials from '@/components/UserCredentials';
import DatasetUpload from '@/components/DatasetUpload';
import DashboardButton from '@/components/DashboardButton';
import '@/styles/SignupPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  faUser,
  faChevronLeft,
  faEdit,
  faCamera,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
const SignupPage = () => {
  const [step, setStep] = useState(1); // Track current step

  // Step Handlers
  const handleCredentialsApproved = () => setStep(2); // Move to DatasetUpload
  const handleDatasetUploaded = () => setStep(3); // Move to Dashboard Button
  return (
    <div className="loginContainer">
      {/* Left Section */}
      <div className="loginLeft">
        <div className="logocontainer">
          <div className="logo">
            <img src="/images/logoPro.png" alt="Logo" className="logImg" />
          </div>
          {/* Back to Settings Link */}
          <div className="backContainer">
            <Link href={"/login"} className="BackHome">
              <FontAwesomeIcon icon={faChevronLeft} className="Hicon" />
              <span>Cancel</span>
            </Link>
          </div>

        </div>
        <div className="loginText">
          <h1 className="welcometext">Welcome Merchant</h1>
        </div>


        {/* Login Form */}

          {/* Step 1: User Credentials */}
          {step === 1 && <UserCredentials onApproved={handleCredentialsApproved} />}

          {/* Step 2: Dataset Upload */}
          {step === 2 && <DatasetUpload onUploadComplete={handleDatasetUploaded} />}

          {/* Step 3: Go to Dashboard */}
          {step === 3 && <DashboardButton />}
        

        



      </div>


    </div>
  );
};

export default SignupPage;

