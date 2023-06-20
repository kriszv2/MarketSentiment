import React from 'react';
import Summary from './summary/Summary';
import "./SymbolDescription.css"
export default function SymbolDescription(props) {
  
  const { company } = props
  const DMA50 = "50DayMovingAverage";
  const WL52 = "52WeekHigh";
  const WH52 = "52WeekLow";
  const DMA200 = "200DayMovingAverage";
  const DMA50Value = company[DMA50];
  const WL52Value = company[WL52];
  const WH52Value = company[WH52];
  const DMA200Value = company[DMA200];
  const { Name, DividendDate, DividendPerShare, DividendYield, MarketCapitalization, Beta } = company;
  console.log(company)
  return (
  <>
    {Name && <h1>Company Overview</h1>}
    <div className='company-overview-main'>

      <div>
        <h3>Summary</h3>
        <Summary Name={Name} DMA50Value={DMA50Value} WL52Value={WL52Value} WH52Value={WH52Value} DMA200Value={DMA200Value} DividendDate={DividendDate} DividendPerShare={DividendPerShare} DividendYield={DividendYield} MarketCapitalization={ MarketCapitalization } Beta={Beta} />
      </div>
      <div>
        <h3>Statistics</h3>
        {/* <Statistics/>   */}
      </div>
    </div>
  </>
  )
}
