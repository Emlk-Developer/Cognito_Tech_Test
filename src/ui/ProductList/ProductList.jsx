import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { getData } from '../../services/apiSupermarketData';
import ProductCard from '../../components/ProductCard/ProductCard';
import styled from 'styled-components';
import ProductDetail from '../ProductDetail/ProductDetail';
import { ProductsContext } from '../../hooks/useContext';

    const ProductListList = styled.ul`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        column-gap: 10px;
        row-gap: 10px;
        padding: 16px;
        margin: 0 auto;

        & :hover {
            background-color: #e1f2fa;
            cursor: pointer;
        }
    `
export default function ProductList() {
    const {setShowProductDetail, showProductDetail, showOverlay} = useContext(ProductsContext);
    
    //run at the beginning to get the products data
    useEffect( () => {
        const supermarketData = async() => {
            const data = await getData()
            setSupermarketproducts(data)
        }
        supermarketData()
    },[])

    const [supermarketproducts, setSupermarketproducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState({});

    const handleShowProductDescription = (product) => {
        setShowProductDetail(!showProductDetail)
        setCurrentProduct(product)
        showOverlay(true)
    }

    const handleRemoveOverlay = () => {
        setShowProductDetail(!showProductDetail)
        showOverlay(false)
    }

  return (
    <>
        <h2>Products</h2>
        <div id="overlay" onClick={() => handleRemoveOverlay()}></div>
        <ProductListList>
            {/* loop over and display returned api product data */}
            {supermarketproducts.map((product) => 
                <ProductCard product={product} key={product.id} handleShowProductDescription={() => handleShowProductDescription(product)}/>
            )}
        </ProductListList>
        {/* if showProductDetail is true show the product detail dialog */}
        {showProductDetail && 
            <ProductDetail product={currentProduct}/>
        }
    </>

  )
}
