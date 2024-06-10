"use client";

import React from "react";

const CopyButton: React.FC<{ code: string }> = ({ code }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="copy-button text-xs font-semibold text-gray-400 btn-copy hover:text-gray-200"
    >
      📋 Copy
    </button>
  );
};

export default CopyButton;
