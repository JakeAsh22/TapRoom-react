
import React from 'react'
import PropTypes from 'prop-types'

function Staff(props){
    const WordStyles = {
        fontFamily: 'Impact, Charcoal, sans-serif'
    }
  return (
    <div style = {WordStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p> <em>{props.issue} - {props.picture}</em></p>
      <hr/>
    </div>
  )
}
// propTypes is declaring a propTypes property on our Staff componenent
// PropTypes is referring to the PropTypes class we import at the top
Staff.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  picture: PropTypes.string
}

export default Staff