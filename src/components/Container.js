import React from "react";

export const Container = ({ fluid, children }) => (
  <div id="main" className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);