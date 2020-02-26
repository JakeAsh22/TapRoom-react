import React from 'react'
import Menu from './Menu'
import PropTypes from 'prop-types'

var masterMenu = [
  {
    names: 'Miller Lite',
    type: 'Pilsner',
    abv: '4.2%',
    price: '$3.50'
  },
  {
    names: 'Guinness',
    type: 'Stout',
    abv: '4.3%',
    price: '$4.00'
  },
  {
    names: 'Sour Monkey',
    type: 'Sour',
    abv: '9.5%',
    price: '$6.00'
  }

]

function Home(props){

  const BoxStyle = {
    marginLeft: '20px',
    border: '15px #FFFFFF',
    padding: '15px',
    margin: '20px',
    borderRadius: '5px',
    fontFamily: 'Circular',
    color: '#484848',
    boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
    backgroundColor: '#b8a98f',
    opacity: '0.85'
  }
  const TextStyle = {
    color: '#bab4b2',
    textAlign: 'center',
    fontFamily: 'Impact, Charcoal, sans-serif'
  }

  return (
    <div>


      <div style = {TextStyle}>
        <h1>Wecome to Buzzed Bob's Bar</h1>
     
        <hr/>
        <h2>Menu</h2>
      </div>
      
      <div style = {BoxStyle}>
        {props.home.map((beers, index) =>
          <Menu names={beers.names}
            type={beers.type}
            abv={beers.abv}
            price = {beers.price}
            key={index}/>
        )}
      </div>
    </div>
  )
}
Home.propTypes = {
  home: PropTypes.func
}

export default Home