import React, { useContext, useEffect, useState } from 'react'
import shoppingBasket from '../../images/shopping-basket.png'
import { ProductsContext } from '../../hooks/useContext';
import Basket from '../Basket/Basket'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px 0 0;
  position: relative;
`
const Button = styled.button`
  background-color: var(--yellow);
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 4px;
  border-color: var(--yellow);
  font-size: 16px;
  font-weight: 600;
`
const BasketList = styled.ul`
  position: absolute;
  background-color: #FFF;
  right:20px;
  top: 65px;
  padding: 20px;
  border: 3px solid var(--green);
  border-radius: 4px;
  list-style-type: none;

  li {
    margin-bottom: 2px;
  }
`

export default function BasketItems() {
  //pass in context props
  const {basket, setBasket} = useContext(ProductsContext);
  const [showBasket, setShowBasket] = useState(false)
  
  //runs once at the beginning to fetch the previusly created basket items
  useEffect(() => {
    const basketItems = localStorage.getItem('basket');
    if (basketItems) {
      //local storage saves as a string, parse to save it in state as an object
      setBasket(JSON.parse(basketItems))
    }
  },[])

  return (
    <ButtonWrapper>
        <Button onClick={() => setShowBasket(!showBasket)}>
            <img src={shoppingBasket} alt='shopping basket' width='21px' height='21px' />
            {/* shows different text depending on the state */}
            {showBasket ? 'Hide Basket' : 'Show Basket'}
        </Button>
        {/* when showBasket is true, show basket */}
        {showBasket &&
          <BasketList>
            {/* the basket is an array of arrays, loop over basket to get each items  */}
              {basket.map(currentBasket => currentBasket.map(basketItem => <Basket basket={basketItem} key={uuidv4()}/>))}
          </BasketList>
         }
    </ButtonWrapper>
  )
}
