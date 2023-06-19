import React from "react";
import { MarketCapCalculation } from "./Stat-functions"

export default function Statistics(props) {

  const { Name, DividendDate, DividendPerShare, DividendYield, DMA50Value, WL52Value, WH52Value, DMA200Value, Beta } = props;
  
  let { MarketCapitalization } = props;
  let MarketCap = MarketCapCalculation(MarketCapitalization)
  
  return (
    <div>
      <ul>
        
        <li>
          Company Name: {Name}
        </li>
        <li>
          Market Cap: {MarketCap}
        </li>
        <li>
          50 Day Moving Average: {DMA50Value}
        </li>
        <li>
          52 Week Low: {WL52Value}
        </li>
        <li>
          52 Week High: {WH52Value}
        </li>
        <li>
          200 Day Moving Average: {DMA200Value}
        </li>
        <li>
          Dividend Date: {DividendDate}
        </li>
        <li>
          Dividend Per Share: {DividendPerShare}$
        </li>
        <li>
          Dividend Yield: {DividendYield*100}%
        </li>
        <li>
          Beta: {Beta} {}
        </li>
      </ul>
    </div>
  )
}
