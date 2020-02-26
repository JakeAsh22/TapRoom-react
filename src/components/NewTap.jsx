import React from 'react';
import PropTypes from 'prop-types';

function BeerForm(props) {
  let _names = null
  let _type = null
  let _abv = null
  let _price = null
  function handleNewTapSubmission(event) {
    event.preventDefault()
    props.onNewTapCreation({ names: _names.value, type: _type.value, abv: _abv.value, price: 0.00 })
    _names.value = '';
    _type.value = '';
    _abv.value = '';
    _price.value = '';

  }


  const BoxLocation = {
    textAlign: 'center',
    display: 'block'
  }
  const BoxMaker = {
    display: 'inline-block',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '15px',
    margin: '20px',
    width: '400px',
    borderRadius: '5px',
    fontFamily: 'Impact, Charcoal, sans-serif',
    color: '#484848',
    boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
    backgroundColor: '#b8a98f',
    opacity: '0.85'
  }
  const Inline = {
    display: 'inline-block'
  }
  const LabelChange = {
    display: 'block'
  }
  const ButtonFloat = {
    float: 'right',
    fontFamily: 'Impact, Charcoal, sans-serif'
  }


  return (
    <div>
      <h1><style jsx> {`
    h1 {
        color: #bab4b2;
      text-align: center;
      font-family: Impact, Charcoal, sans-serif;
    }
    `}</style>Add a new tap</h1>
      <div style={BoxLocation}>
        <div style={BoxMaker}>
          <h1>Enter the new tap's information</h1>
          <form onSubmit={handleNewTapSubmission}>
            <label>Brand</label>
            <br></br>
            <input
              type='text'
              id='names'
              placeholder='Brand'
              ref={(input) => { _names = input }} />
            <br />
            <br />
            <div style={Inline}>
              <label style={LabelChange}>Type</label>
              <input 
                type='text'
                id='type'
                placeholder='type'
                ref={(input) => { _type = input }} />
            </div>
            <div style={Inline}>
              <label style={LabelChange}>ABV</label>
              <input 
                type='text'
                id='abv'
                placeholder='abv'
                ref={(input) => { _abv = input }} />
            </div>
            <br />
            <br />
            <div style={Inline}>
              <label style={LabelChange}>Price</label>
              <input
                type='text'
                id='price'
                placeholder='price'
                ref={(input) => { _price = input }} />
            </div>
            <br />
            <button type="submit" style={ButtonFloat}>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

BeerForm.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default BeerForm