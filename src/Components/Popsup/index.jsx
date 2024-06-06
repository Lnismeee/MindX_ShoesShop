import React from "react";

export default function Popsup({ children }) {
  return (
    <div className="absolute m-auto flex h-screen w-screen items-center justify-center bg-gray-600 bg-opacity-45">
      <div className="flex flex-col justify-center gap-6 h-72 w-80 items-center rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}
