import React from 'react'
import styled from 'styled-components';


    const ProductCardListproduct = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid #b6bcbf;
    box-shadow: 3px 3px #ccd8de;
    border-radius: 5px;
    padding: 10px;
    `
    const H3 = styled.h3`
      color: var(--green);
    `
export default function ProductCard({product, handleShowProductDescription}) {



  return (
    <ProductCardListproduct key={product.id} onClick={() => handleShowProductDescription(product)}>
        <H3>product: {product.name}</H3>
        <div>Price: {product.price}</div>
    </ProductCardListproduct>
  )
}
