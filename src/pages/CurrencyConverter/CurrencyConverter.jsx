import React from "react";
import { ConverterComponent } from "../../components/CurrencyConverter/ConverterComponent";
import cl from "./CurrencyConverter.module.css";

export const CurrencyConverter = (props) => {
  return (
    <div className={cl.CurrencyConverter}>
      <h1>CurrencyConverter </h1>
      <ConverterComponent props={props}/>
    </div>
  );
};