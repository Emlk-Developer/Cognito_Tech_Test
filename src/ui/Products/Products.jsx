import React from 'react'
import Header from '../../components/Header/Header'
import ProductList from '../ProductList/ProductList'
import { ProductsContext } from '../../hooks/useContext'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Notification from '../../components/Notifcation/Notifcation';
import BasketItems from '../../components/BasketItems/BasketItems'


export default function Products() {
  const [basket, setBasket] = useState([]);
  const [notification, setNotification] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);

  const handleAddToBasket = ({product}) => {
    console.log('pro', product);
    /* everytime a product is added to the basket, we create an array to save the information.
    The product information is stored in an object with a unique identifier*/
    const addedProduct = [{id: uuidv4(), product: product.name, price: Number(product.price)}]
    //TODO: check if product already exists in basket
    //spread the current basket array items and add the newly created product array.
    //newBasket is an array of arrays
    const newBasket = [...basket, addedProduct]
    setBasket(newBasket)
    //send toast notification to say product was added to the basket
    setNotification(true)
    //update localStorage with the new basket information
    localStorage.setItem('basket', JSON.stringify(newBasket));
    //hide dialog box
    setShowProductDetail(!showProductDetail);
    showOverlay(false);
  }

  //function to show or hide overlay underneath product detail dialog
  const showOverlay = (show) => {
    if (show) {
      document.getElementById("overlay").style.display = "block";
    } else {
      document.getElementById("overlay").style.display = "none";
    }
  }


  return (
    //context provider wrapped around the Products.
    <ProductsContext.Provider 
      value={{basket, setBasket, handleAddToBasket, showProductDetail, setShowProductDetail, showOverlay}}>
      <Header />
      <BasketItems />
      <Notification notification={notification} onChange={setNotification}/>
      <ProductList />
    </ProductsContext.Provider>

  )
}
