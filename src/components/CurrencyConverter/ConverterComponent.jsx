import React from "react";
import { InputSelect } from "../InputSelect/InputSelect";
import cl from "./ConverterComponent.module.css";

export const ConverterComponent = props => {
  return (
    <div className={cl.ConverterComponent}>
      <InputSelect props={props} />
      <InputSelect props={props} />
    </div>
  );
};
