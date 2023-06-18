import React from 'react'

export default function SymbolDescription(props) {
  const { Name } = props.company.data
  console.log(props.company.data)
  return (
      <div>{ Name }</div>
  )
}
