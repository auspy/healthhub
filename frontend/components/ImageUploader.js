"use client";
import { urlCommon } from "@/app/constants";
import React, { useState } from "react";

const ImageUploader = ({ onUpload1 }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onUpload = async (formData) => {
    try {
      console.log("Uploading image...", formData.get("image"));
      const response = await fetch(urlCommon + "/brain/1", {
        method: "POST",
        body: formData,
      });
      console.log("response", response);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Upload successful:", responseData);
        if (responseData.prediction) {
          setText(responseData.prediction);
        }
      } else {
        console.error("Error uploading image:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      onUpload(formData);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {text && <p>{text}</p>}
    </div>
  );
};

export default ImageUploader;
