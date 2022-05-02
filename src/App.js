import { useEffect, useState } from "react";
import { BASE_URL, requestOptions } from "./API/ConvertService";
import "./App.css";
import { Header } from "./components/Header/Header";
import { CurrencyConverter } from "./pages/CurrencyConverter/CurrencyConverter";

// var myHeaders = new Headers();
// myHeaders.append("apikey", "Dw1nzGut3bFtndAHOUklwW1vRQ8bnsFy");

// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
//   headers: myHeaders,
// };

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);

  useEffect(() => {
    fetch(BASE_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      })
      .catch((error) => console.log("error", error));
  }, []);
  
  return (
    <div className="App">
      <Header />
      <CurrencyConverter currencyOptions={currencyOptions} />
    </div>
  );
}

export default App;
