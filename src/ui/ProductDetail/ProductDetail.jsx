import React, {useContext} from 'react'
import styled from 'styled-components';
import { ProductsContext } from '../../hooks/useContext';
import AddToBasketButton from '../../components/AddToBasketButton/AddToBasketButton';

const ProductDialog = styled.dialog`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin: unset;
  gap: 10px;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  z-index: 3;
  border: 6px solid var(--green);
  height: auto;
  width: 300px;
  background-color: var(--lightGrey);

  span {
    text-align: right;
    font-weight: 500;
  }

`

export default function ProductDetail({product}) {
  //pass in context props
  const {setShowProductDetail, showProductDetail, showOverlay} = useContext(ProductsContext);
    
  //function to close the dialog box and remove overlay
    const handleCloseDialog = () => {
      setShowProductDetail(!showProductDetail)
      showOverlay(false);
    }

  return (
    <ProductDialog open>
      <span onClick={() => handleCloseDialog()}>X</span>
      <div>
        <h3>Description:</h3>
        <p>{product.description}<br />£{product.price}</p>
      </div>
      <AddToBasketButton product={product}/>
    </ProductDialog>
  )
}
