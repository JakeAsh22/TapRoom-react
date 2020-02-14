
import React from 'react'

function StorySuggestion(){
  const BoxLocation = {
    textAlign: 'center',
    display: 'block'
  }
  const BoxMaker = {
    marginLeft: '20px',
    display: 'inline-block',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '15px #FFFFFF',
    padding: '15px',
    margin: '20px',
    width: '400px',
    borderRadius: '5px',
    position: 'absolute',
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
  return(
    <div>
      <h1><style jsx> {`
    h1 {
        color: #bab4b2;
      text-align: center;
      font-family: Impact, Charcoal, sans-serif;
    }
    `}</style>Add a new tap</h1>
    <div>
    <div style = {BoxMaker}>
            <h1>Enter the new tap's information</h1>
            <form>
                <label>Brand</label>
                <br></br>
                <input type="text"></input>
                <br/>
                <br/>
                <div style={Inline}>
                    <label style = {LabelChange}>Type</label>
                    <input type="text"></input>
                </div>
                <div style={Inline}>
                    <label style = {LabelChange}>ABV</label>
                    <input type="text"></input>
                </div>
                <br/>
                <button type="submit" style = {ButtonFloat}>Search</button>
            </form>
          </div>
    </div>
    </div>
  )
}

export default StorySuggestion