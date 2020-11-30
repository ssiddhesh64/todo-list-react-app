import React from "react";

export const Dropdown = ({ values, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <select value={value} onChange={handleChange}>
      {values.map((value) => {
        return (
          <option key={value} value={value}>
            {" "}
            {value}{" "}
          </option>
        );
      })}
    </select>
  );
};
