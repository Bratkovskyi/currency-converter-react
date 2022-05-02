import React from "react";
import { InputNumber } from "../../UI/Input/InputNumber";
import { Select } from "../../UI/Select/Select";
import cl from "./InputSelect.module.css";

export const InputSelect = () => {
  return (
    <div className={cl.InputSelect}>
      <InputNumber />
      <Select />
    </div>
  );
};
