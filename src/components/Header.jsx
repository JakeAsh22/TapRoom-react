import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  const WordStyles = {
    fontFamily: 'Impact, Charcoal, sans-serif',
    color: 'white',
    backgroundColor: '#b8a98f',
    opacity: '0.8'
  }
  return (
    <div style ={WordStyles}>
      <Link to="/">Home</Link> | <Link to="/NewTap">Add a new tap</Link>
      <hr/>
    </div>
  )
}

export default Header