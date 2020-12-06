import React from "react";
import "./PopUp.css";

export const PopUp = ({ children, ...props }) => (
  <div className="modal" {...props}>
    <div className="modelCard">{children}</div>
  </div>
);
