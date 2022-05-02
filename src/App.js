import { useEffect, useState } from "react";
import { BASE_URL, requestOptions } from "./API/ConvertService";
import "./App.css";
import { Header } from "./components/Header/Header";
import { CurrentOptionContext } from "./context";
import { CurrencyConverter } from "./pages/CurrencyConverter/CurrencyConverter";
import { Loader } from "./UI/Loader/Loader";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [formCurrency, setFormCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [USDtoUAH, setUSDtoUAH] = useState(0);
  const [EURtoUAH, setEURtoUAH] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(6);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(6);
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(BASE_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFormCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
        setUSDtoUAH((data.rates.UAH / data.rates.USD).toFixed(6));
        setEURtoUAH(data.rates.UAH);
        setIsLoading(false)
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (formCurrency != null && toCurrency != null) {
      fetch(
        `https://api.apilayer.com/exchangerates_data/latest?base=${formCurrency}&symbols=${toCurrency}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [formCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }
  return (
    <CurrentOptionContext.Provider
      value={{
        currencyOptions,
        formCurrency,
        toCurrency,
        setFormCurrency,
        setToCurrency,
        toAmount,
        fromAmount,
        handleFromAmountChange,
        handleToAmountChange,
      }}
    >
      <div className="App">
        <Header USDtoUAH={USDtoUAH} EURtoUAH={EURtoUAH} />
        {isLoading
        ? <Loader/>
        : <CurrencyConverter />
        }
      </div>
    </CurrentOptionContext.Provider>
  );
}

export default App;
