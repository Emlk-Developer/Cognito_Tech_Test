import React, {useContext} from 'react'
import { ProductsContext } from '../../hooks/useContext';
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 999px;
    padding: 10px 15px;
    border: 1px solid black;
    background-color: var(--yellow);
    color: var(--green);

    & :active {
        background-color: var(--lightYellow);
        cursor: pointer;
    }
`

export default function AddToBasketButton({product}) {
    const {handleAddToBasket} = useContext(ProductsContext);
    // remove the bracket information from the product name
    const formatProductName = product.name.split('(')[0];

  return (
    <Button onClick={() => handleAddToBasket({product})}>
        <h3 data-testid='buttonText'>Add {formatProductName} to cart</h3>
    </Button>
  )
}
