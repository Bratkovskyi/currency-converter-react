import React from "react";
import cl from "./Select.module.css"
export const Select = () => {
  return (
    <select className={cl.Select} name="select">
      <option value="value1">Значение 1</option>
      <option value="value2" selected>
        Значение 2
      </option>
      <option value="value3">Значение 3</option>
    </select>
  );
};
