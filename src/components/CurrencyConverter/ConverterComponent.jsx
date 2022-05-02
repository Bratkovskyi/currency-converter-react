import React, { useContext } from "react";
import { CurrentOptionContext } from "../../context";
import { InputSelect } from "../InputSelect/InputSelect";
import cl from "./ConverterComponent.module.css";

export const ConverterComponent = () => {
  const {
    fromCurrency,
    toCurrency,
    setFormCurrency,
    setToCurrency,
    toAmount,
    fromAmount,
    handleFromAmountChange,
    handleToAmountChange,
  } = useContext(CurrentOptionContext);

  return (
    <div className={cl.ConverterComponent}>
      <InputSelect
        onChangeCurrency={(e) => setFormCurrency(e.target.value)}
        selectedCurrency={fromCurrency}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <InputSelect
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        selectedCurrency={toCurrency}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />
    </div>
  );
};
