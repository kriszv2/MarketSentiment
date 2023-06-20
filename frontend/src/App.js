import axios from "axios";
import { useEffect, useState } from "react";
import SymbolDescription from "./companyOverview/SymbolDescription";

function App() {
  const [isSearched, setIsSearched] = useState(false);
  const [symbol, setSymbol] = useState(``);
  const [company, setCompany] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e) => {
    setSymbol(e.target.value);
  };
  const searchSymbol = async (e) => {
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
        {isSearched && <SymbolDescription company={company} />}
      </main>
    </div>
  );
}

export default App;
