import React, { useState } from "react";
import cl from "./Header.module.css";
export const Header = ({ EURtoUAH, USDtoUAH }) => {
  return (
    <header className={cl.Header}>
      <div>
        <h1>Currency Converter</h1>
      </div>
      <div>
        <div>
          <h3>$ {USDtoUAH} </h3>
        </div>
        <div>
          <h3>€ {EURtoUAH}</h3>
        </div>
      </div>
    </header>
  );
};
