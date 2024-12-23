"use client";
import { useState, useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log("Error", error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default error;
