import React, { useContext } from "react";
import { CurrentOptionContext } from "../../context";
import { InputNumber } from "../../UI/Input/InputNumber";
import { Select } from "../../UI/Select/Select";
import cl from "./InputSelect.module.css";

export const InputSelect = (props) => {
  const {currencyOptions} = useContext(CurrentOptionContext)
  const {selectedCurrency, onChangeCurrency, amount, onChangeAmount} = props
  return (
    <div className={cl.InputSelect}>
      <InputNumber onChangeAmount={onChangeAmount} value={amount} />
      <Select currencyOptions={currencyOptions} onChangeCurrency={onChangeCurrency} value={selectedCurrency}/>
    </div>
  );
};
