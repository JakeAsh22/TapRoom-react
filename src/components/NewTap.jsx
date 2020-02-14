
import React from 'react'

function StorySuggestion(){
  return(
    <div>
      <h1><style jsx> {`
    h1 {
        color: #bab4b2;
      text-align: center;
      font-family: Impact, Charcoal, sans-serif;
    }
    `}</style>Add a new tap</h1>
    
      <form>
        <input  
          type='text'
          id='name'
          placeholder="Drink Name"/>
        <input 
          type='text'
          id='type'
          placeholder='Type of drink'/>
        <input
          id='ABV'
          placeholder='ABV (Alcohol by Volume)'/>
      </form>
    </div>
  )
}

export default StorySuggestion