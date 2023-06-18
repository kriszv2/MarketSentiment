import "./App.css";
import { useState } from "react";
import axios from "axios";
import SymbolDescription from "./SymbolDescription";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [isSearched, setIsSearched] = useState(false);
  const [symbol, setSymbol] = useState(``);
  const [company, setCompany] = useState([]);
  const changeHandler = (e) => {
    setSymbol(e.target.value);
  };
  const searchSymbol = (e) => {
    e.preventDefault();

    let url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;
    axios
      .get(url)
      .then((res) => {
        setCompany(res);
        setIsSearched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Market sentiment</h1>
      </header>
      <main>
        <form onSubmit={searchSymbol}>
          <input
            type="text"
            name="symbol"
            placeholder="Insert Symbol"
            value={symbol}
            onChange={changeHandler}
          />
          <input type="submit" value="Submit" />
        </form>
        {isSearched && <SymbolDescription company={company} />}
      </main>
    </div>
  );
}

export default App;
