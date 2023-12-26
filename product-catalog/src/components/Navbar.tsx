import React from 'react'
import {IoMdSearch } from "react-icons/io"
const navItems = [
{id:"Home"},
{id:"Products"},
{id:"About"},
{id:"About"}
];

function Navar() {
  return (
   <nav>
    <div className='nav'>
      {navItems.map((item)=>(
        <a key={item.id} href={`#${item.id}`}>{item.id}</a>
      ))}
    </div>
    <div className='logo'>
      <h1>Logo</h1>
    </div>
    
    <div className='util'>
        <p><IoMdSearch/></p>
        <p>Cart</p>
        <p>User</p>
    </div>
   </nav>
  )
}

export default Navar