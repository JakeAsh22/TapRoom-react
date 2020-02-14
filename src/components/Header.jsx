import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
   const WordStyles = {
      fontFamily: 'Impact, Charcoal, sans-serif',
      color: 'white'
   }
  return (
    <div styles ={WordStyles}>
      <Link to="/">Home</Link> | <Link to="/AboutUs">About us</Link> | <Link to="/StorySuggestion">Suggest a story to be covered</Link> | <Link to="/ViewStories">View suggested stories</Link>
    </div>
  )
}

export default Header