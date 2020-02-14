
import React from 'react'
import PropTypes from 'prop-types'

function Staff(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p>   <style global jsx>{`
        p {
          color: red;
        }
      `}</style><em>{props.issue} - {props.picture}</em></p>
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