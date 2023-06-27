import React from "react"
export default function Statistics(props) {

  const { company } = props;
  const { DilutedEPSTTM,EBITDA,EPS,EVToEBITDA,EVToRevenue,ForwardPE,GrossProfitTTM,PEGRatio,PERatio,PriceToBookRatio,PriceToSalesRatioTTM,ProfitMargin,QuarterlyEarningsGrowthYOY,QuarterlyRevenueGrowthYOY,ReturnOnAssetsTTM,ReturnOnEquityTTM,RevenuePerShareTTM,RevenueTTM,TrailingPE } = company;

  return (
    <>
      <div>
      <ul>
        
        <li>
          Diluted EPSTTM: {DilutedEPSTTM}
        </li>
        <li>
          EBITDA: {EBITDA}
        </li>
        <li>
          EPS: {EPS}
        </li>
        <li>
          EV To EBITDA: {EVToEBITDA}
        </li>
        <li>
          EV To Revenue: {EVToRevenue}
        </li>
        <li>
          Forward PE: {ForwardPE}
        </li>
        <li>
          Gross Profit TTM: {GrossProfitTTM}
        </li>
        <li>
          PEG Ratio: {PEGRatio}
        </li>
        <li>
          PE Ratio: {PERatio}
        </li>
        <li>
            Price To Book Ratio: {PriceToBookRatio}
        </li>
        <li>
          Price To Sales Ratio TTM: {PriceToSalesRatioTTM}
        </li>
        <li>
          Profit Margin: {ProfitMargin}
          </li>
          <li>
          Quarterly Earnings Growth YOY: {QuarterlyEarningsGrowthYOY}
        </li>
        <li>
          Quarterly Revenue Growth YOY: {QuarterlyRevenueGrowthYOY}
        </li>
        <li>
          Return On Assets TTM: {ReturnOnAssetsTTM}
        </li>
        <li>
          Return On Equity TTM: {ReturnOnEquityTTM}
        </li>
        <li>
          Revenue Per Share TTM: {RevenuePerShareTTM}
        </li>
        <li>
            Revenue TTM: {RevenueTTM}
        </li>
        <li>
          Trailing PE: {TrailingPE}
        </li>
      </ul>
      </div>
    </>
  )
}
