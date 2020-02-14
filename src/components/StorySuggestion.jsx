
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
    `}</style>Suggest A Story</h1>
    
      <form>
        <input  
          type='text'
          id='names'
          placeholder="Submitter's Name"/>
        <input 
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe the Story.'/>
      </form>
    </div>
  )
}

export default StorySuggestion