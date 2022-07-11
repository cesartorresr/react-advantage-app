import React from 'react'
import logo from '../images/Group.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo'/>
      <h1 className='title'>React Facts</h1>
      <h1 className='encabezado'> React Course - Project 1</h1>
    </div>
  )
}
