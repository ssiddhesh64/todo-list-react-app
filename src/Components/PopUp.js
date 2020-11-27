import React from "react";
import "./PopUp.css";

export const PopUp = ({ children, ...props }) => (
  <div className="Modal" {...props}>
    <div className="modal-wrapper">
      <div className="modal">
        <div className="inner">{children}</div>
      </div>
    </div>
  </div>
);
