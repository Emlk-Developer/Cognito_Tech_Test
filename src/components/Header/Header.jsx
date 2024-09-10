import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../images/supermarkets.png';
import styled from 'styled-components';

const HeaderTag = styled.header`
background-color: #FFF;
display: flex;
justify-content: space-between;
padding: 20px;
position: relative;

@media (max-width: 480px) {
  flex-direction: column;
  align-items: center;
    }
`
const HeaderTitle = styled.div`
  display: flex;
  gap: 10%;
  width: 100%;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: space-between;
    }
`
const HeaderNav = styled.ul`
  list-style: none;
  display: flex;
  gap: 10%;
  width: 100%;
  align-items: center;
  padding: 0 40px 0 0;

  li {
    font-size: 16px;
    color: var(--green);
    font-weight: 400;
  }

  @media (max-width: 480px) {
    justify-content: space-between;
    }
`

export default function Header() {

  return (
    <HeaderTag>
      <HeaderTitle>
        <NavLink to='/'>
          <img src={logo} width='60' height='60' alt='supermarket logo' />
        </NavLink>
        <h1>Supermarket</h1>
      </HeaderTitle>
      <nav>
        <HeaderNav>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
        </HeaderNav>
      </nav> 
    </HeaderTag>
  )
}
