import React from "react";
import { ConverterComponent } from "../../components/CurrencyConverter/ConverterComponent";
import cl from "./CurrencyConverter.module.css";

export const CurrencyConverter = () => {
  return (
    <div className={cl.CurrencyConverter}>
      <div className={cl.container}>
        <h1>Currency Converter</h1>
        <ConverterComponent />
      </div>
    </div>
  );
};
