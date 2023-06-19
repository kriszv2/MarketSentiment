import React from 'react';
import Statistics from './statistics/Statistics';
import "./SymbolDescription.css"
export default function SymbolDescription(props) {

  const { data } = props.company;
  const DMA50 = "50DayMovingAverage";
  const WL52 = "52WeekHigh";
  const WH52 = "52WeekLow";
  const DMA200 = "200DayMovingAverage";
  const DMA50Value = data[DMA50];
  const WL52Value = data[WL52];
  const WH52Value = data[WH52];
  const DMA200Value = data[DMA200];
  const { Name, DividendDate, DividendPerShare, DividendYield, MarketCapitalization, Beta } = data;
  console.log(data)
  return (
  <>
    {Name && <h1>Company Overview</h1>}
    <div className='company-overview-main'>

      <div>
        <h3>Summary</h3>
        <Statistics Name={Name} DMA50Value={DMA50Value} WL52Value={WL52Value} WH52Value={WH52Value} DMA200Value={DMA200Value} DividendDate={DividendDate} DividendPerShare={DividendPerShare} DividendYield={DividendYield} MarketCapitalization={ MarketCapitalization } Beta={Beta} />
      </div>
      <div>
        <h3>Statistics</h3>
      </div>
    </div>
  </>
  )
}
