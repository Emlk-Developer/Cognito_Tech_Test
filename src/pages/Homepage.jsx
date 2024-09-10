import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header/Header'
import logo from '../images/supermarkets.png';


export default function Homepage() {
  return (
    <div>
      <Header />
      <div className='homepage'>
        <h2>Welcome to the Supermarket, let's get shopping!</h2>
        <NavLink to='/products'>View All Products</NavLink>
        <img src={logo} alt='large supermarket logo' className='homepage-logo' />
      </div>
    </div>
  )
}
