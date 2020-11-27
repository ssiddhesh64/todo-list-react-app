import React from "react";
import { PopUp } from "./PopUp";
import "./PopUp.css";

export const Toast = ({ show, title, description }) => {
  if (show) {
    return (
      <PopUp>
        <h3 className="heading">{title}</h3>
        <p className="desc">{description}</p>
      </PopUp>
    );
  } else return null;
};
