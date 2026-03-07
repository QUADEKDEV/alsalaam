"use client"
import React from 'react'
import { useState } from 'react';
import { updateProfile } from '../utils/actions';
import toast from 'react-hot-toast';
const page = () => {
    const [file, setFile] = useState<string|null>(null);
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (!selectedFile) return;
    
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
    
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setFile(reader.result);
        }
      };
    };

    const handleupdateclick = async()=>{
        if(!file){
            toast.error("Please select a file to upload")
        }
        else{
        let res=await updateProfile(file)
        toast.success(res.message as string)}
    }
  return (
    <div>
      <div className="payment-container">
        <input
          type="file"
          name="profileImage"
          onChange={(e) => handleFileChange(e)}
        />
        <br />
        <button type="submit" onClick={handleupdateclick}>
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default page
