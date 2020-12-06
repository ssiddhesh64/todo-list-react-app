import React from "react";
import { PopUp } from "./PopUp";
import "./PopUp.css";

export const Toast = ({ show, title, description }) => {
  if (show) {
    return (
      <PopUp>
        <h3>{title}</h3>
        <div>{description}</div>
      </PopUp>
    );
  } else return null;
};
