import axios from "axios";
import { useEffect, useState } from "react";
import SymbolDescription from "./companyOverview/SymbolDescription";

function App() {
  const [isSearched, setIsSearched] = useState(false);
  const [symbol, setSymbol] = useState(``);
  const [company, setCompany] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [stockPrice, setStockPrice] = useState(null);
  const [SMA, setSMA] = useState(null);
  const [SMASignal, setSMASignal] = useState(false);
  const [currPrice, setCurrPrice] = useState(null);
  const [signalSet, setSignalSet] = useState(false);
  // const [refreshDate, setRefreshDate] = useState(null);

  const changeHandler = (e) => {
    setSymbol(e.target.value);
  };
  const searchSymbolPrice = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/get-price", {
        symbol,
      });
      setStockPrice(res.data);
      setCurrPrice(res.data["Global Quote"]["05. price"]);
    } catch (error) {
      console.error(error);
    }
  };
  const searchSymbolData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/search-symbol", {
        symbol,
      });
      setCompany(res.data);
      setIsSearched(true);
      setSymbol(``);

      Object.keys(res.data).length === 0 ? setIsValid(false) : setIsValid(true);
    } catch (error) {
      console.error(error);
    }
  };
  const getSMAOfSymbol = async (e) => {
    e.preventDefault();
    let interval = "daily";
    let time_period = 10;
    try {
      const res = await axios.post("http://127.0.0.1:5000/get-sma", {
        symbol,
        interval,
        time_period,
      });
      // setRefreshDate(res.data["Meta Data"]["3: Last Refreshed"]);

      setSMA(
        res.data["Technical Analysis: SMA"][
          `${res.data["Meta Data"]["3: Last Refreshed"]}`
        ]
      );
    } catch (error) {
      console.log(error);
    }
  };
  const searchSymbol = async (e) => {
    e.preventDefault();
    await getSMAOfSymbol(e);
    await searchSymbolPrice(e);
    await searchSymbolData(e);
  };

  if (isSearched === true && signalSet == false) {
    setSMASignal(currPrice > SMA);
    setSignalSet(true);
    console.log(SMASignal);
  }
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
        {!isValid && <p>Invalid company symbol</p>}
        <h2>
          Current Price:&nbsp;
          {stockPrice &&
            stockPrice["Global Quote"] &&
            stockPrice["Global Quote"]["05. price"]}
        </h2>
        {isSearched && <SymbolDescription company={company} />}
        <div>
          <h2>Technicals</h2>
          <p>SMA: {SMASignal ? "Buy" : "Short"}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
