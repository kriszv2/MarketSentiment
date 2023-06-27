import React from 'react';
import Summary from './summary/Summary';
import "./SymbolDescription.css"
import Statistics from './statistics/Statistics';

export default function SymbolDescription(props) {
  
  const { company } = props;
  const { Name } = company;
  console.log(company)
 
  
  return (
  <>
    {Name && <h1>Company Overview</h1>}
    <div className='company-overview-main'>

      <div>
        <h3>Summary</h3>
        <Summary company={company} />
      </div>
      <div>
        <h3>Statistics</h3>
          <Statistics company={ company } />
      </div>
    </div>
  </>
  )
}
