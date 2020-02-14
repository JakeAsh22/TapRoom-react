
import React from 'react'

function StorySuggestion(){
  return(
    <div>
      <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
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