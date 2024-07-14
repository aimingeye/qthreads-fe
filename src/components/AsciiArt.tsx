// src/components/AsciiArt.tsx

"use client"; // Add this line to mark the component as a client component

import React from "react";

const AsciiArt = () => {
  return (
    <div
      style={{
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
          fontSize: "4rem",
        }}
      >
        <span style={{ color: "#FFFFFF", fontSize: "12rem" }}>Q</span>threads
        <span
          style={{ color: "#0056b3", animation: "blink 1s step-end infinite" }}
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
            color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default AsciiArt;
