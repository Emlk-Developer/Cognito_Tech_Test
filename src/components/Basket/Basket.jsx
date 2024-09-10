import React from 'react'

export default function Basket({basket}) {
  return (
      <li key={basket.id}>
          {basket.product} - 
          £{basket.price}
      </li> 
  )
}
