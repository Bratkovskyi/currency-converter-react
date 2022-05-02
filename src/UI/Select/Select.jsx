import React from "react";
import cl from "./Select.module.css";

export const Select = ({ value, onChangeCurrency, currencyOptions }) => {
  return (
    <select
      value={value}
      className={cl.Select}
      onChange={onChangeCurrency}
      name="select"
    >
      {currencyOptions.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
