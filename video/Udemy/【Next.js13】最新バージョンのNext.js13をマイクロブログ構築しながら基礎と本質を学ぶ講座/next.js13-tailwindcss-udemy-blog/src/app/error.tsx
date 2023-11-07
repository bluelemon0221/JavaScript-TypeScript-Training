"use client";
import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 rounded shadow-md max-w-md mx-auto mb-4 text-center">
      <h3 className="fount-bold mb-2 py-4">エラーが発生しました。</h3>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200 mb-4"
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
