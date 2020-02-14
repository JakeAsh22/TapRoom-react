
import React from 'react'
import PropTypes from 'prop-types'

function Staff(props){
  const WordStyles = {
    fontFamily: 'Impact, Charcoal, sans-serif',
    opacity: '1!important'
  }
  return (
    <div style = {WordStyles}>
      <h3>{props.names} - {props.abv} abv</h3>
      <p> <em>{props.type}</em></p>
      <hr/>
    </div>
  )
}
// propTypes is declaring a propTypes property on our Staff componenent
// PropTypes is referring to the PropTypes class we import at the top
Staff.propTypes = {
  names: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.string,
  picture: PropTypes.string
}

export default Staff