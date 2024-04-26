"use client";
import { useEffect, useState } from "react";
import { urlCommon } from "../constants";
import { fields as fds } from "./fields";
import ImageUploader from "@/components/ImageUploader";

export default function Home({ params }) {
  const [prediction, setPrediction] = useState(null);
  const modelName = params.modal?.toString().replace("%20", " ");
  console.log(modelName, "modelname", Object.keys(fds));
  // useEffect(() => {
  //   let timer;
  //   if (prediction) {
  //     timer = setTimeout(() => {
  //       setPrediction(null);
  //     }, 5000);
  //   }
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [prediction]);
  const commonProps = {
    className:
      "bg-cardBg rounded-lg py-1 px-3 focus:border-heading border border-textLight ",
  };
  const fields = fds;
  function sendPrediction() {
    if (!modelName || !fields[modelName]) {
      console.error("Model not found");
      return;
    }
    const formData = {};
    fields[modelName].forEach((field) => {
      console.log(field.value, document.getElementById(field.value).value);
      formData[field.value] = parseInt(
        document.getElementById(field.value).value,
      );
    });
    const endpoint = {
      heart1: "/heart/1",
      heart2: "/heart/2",
      brain2: "/brain/2",
    };

    console.log(
      formData,
      "for",
      fields[modelName],
      modelName,
      urlCommon + endpoint[modelName],
    );
    fetch(urlCommon + endpoint[modelName], {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrediction(data);
      })
      .catch((error) => console.error("Error:", error));
  }
  if (modelName == "brain1") {
    return <ImageUploader />;
  }
  return (
    <main className="flex min-h-screen  flex-col items-center  p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      {/* <h1 className="text-4xl font-bold text-center">Predictor</h1> */}
      <p
        className={` text-[24px] uppercase font-semibold mb-5 text-center lg:text-[48px]  text-heading relative z-10 `}
      >
        {modelName}
      </p>
      <form id="predictionForm" className="flex flex-col items-center gap-y-3">
        {modelName &&
          Array.isArray(fields[modelName]) &&
          fields[modelName].map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-y-1">
              <label htmlFor={item.value}>{item.label}:</label>
              <input
                {...commonProps}
                type={item.type}
                id={item.value}
                name={item.value}
                defaultValue={item.defaultValue}
              />
            </div>
          ))}
        <button
          type="button"
          className="mt-2 bg-white hover:bg-cardBg p-2 px-4 border rounded-lg border-cardBorder"
          onClick={() => {
            sendPrediction();
          }}
        >
          Submit
        </button>
      </form>
      {/* </div> */}
      {prediction && (
        <div className="mx-2 mt-10">
          <h2>Prediction</h2>
          <p>{prediction["prediction"]}</p>
        </div>
      )}
    </main>
  );
}
