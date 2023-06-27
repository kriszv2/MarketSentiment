import React from "react";
import { MarketCapCalculation } from "./Stat-functions"

export default function Statistics(props) {
  const { company } = props;
  const { Name, DividendDate, DividendPerShare, DividendYield, Beta, ExDividendDate, BookValue,AnalystTargetPrice } = company;
  const DMA50 = "50DayMovingAverage";
  const WL52 = "52WeekHigh";
  const WH52 = "52WeekLow";
  const DMA200 = "200DayMovingAverage";
  const DMA50Value = company[DMA50];
  const WL52Value = company[WL52];
  const WH52Value = company[WH52];
  const DMA200Value = company[DMA200];
  let { MarketCapitalization } = company;
  let MarketCap = MarketCapCalculation(MarketCapitalization)
  
  return (
    <div>
      <ul>
        
        <li>
          Company Name: {Name}
        </li>
        <li>
          Analyst Target Price: {AnalystTargetPrice}
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
          Ex-Dividend Date: {ExDividendDate}
        </li>
        <li>
          Dividend Per Share: {DividendPerShare}$
        </li>
        <li>
          Dividend Yield: {DividendYield*100}%
        </li>
        <li>
          Beta: {Beta}
        </li>
        <li>
          Book Value: {BookValue}
        </li>
      </ul>
    </div>
  )
}
