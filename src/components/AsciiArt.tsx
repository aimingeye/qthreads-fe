// src/components/AsciiArt.tsx

"use client"; // Add this line to mark the component as a client component

import React from "react";

const AsciiArt = () => {
  return (
    <div
      style={{
        backgroundColor: "ivory",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <pre
        style={{
          color: "black",
          whiteSpace: "pre",
          fontFamily: "monospace",
          fontSize: "2rem",
        }}
      >
        <span style={{ color: "blue" }}>Q</span>threads
        <span
          style={{ color: "blue", animation: "blink 1s step-end infinite" }}
        >
          .
        </span>
      </pre>
      <style jsx>{`
        @keyframes blink {
          from,
          to {
            color: transparent;
          }
          50% {
            color: blue;
          }
        }
      `}</style>
    </div>
  );
};

export default AsciiArt;
