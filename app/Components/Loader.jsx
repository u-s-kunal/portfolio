
"use client";

import React from "react";

const NeonLoader = ({ text = "Loading..." }) => {
  return (
    <div className="site-loader">
      <div className="loader-content">
        <div className="loader-mark">
          <span />
        </div>

        <div className="loader-info">
          <p>{text}</p>
          <span>Please wait</span>
        </div>
      </div>
    </div>
  );
};

export default NeonLoader;

