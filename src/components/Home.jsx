import React from 'react'
import Stories from './Stories'


var masterViewStories = [
  {
    names: 'Miller Lite',
    type: 'Pilsner',
    abv: '4.2%'
  },
  {
    names: 'Guinness',
    type: 'Stout',
    abv: '4.3%'
  },
  {
    names: 'Sour Monkey',
    type: 'Sour',
    abv: '9.5%'
  }

]

function ViewStories(){
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

  return (
    <div>
      <h1><style jsx> {`
    h1 {
      color: #bab4b2;
      text-align: center;
      font-family: Impact, Charcoal, sans-serif;
    }

    }
    `}</style>Wecome to the Epicodus Tap Room</h1>
     
      <hr/>
      <div style = {BoxStyle}>
        {masterViewStories.map((stories, index) =>
          <Stories names={stories.names}
            type={stories.type}
            abv={stories.abv}
            key={index}/>
        )}
      </div>
    </div>
  )
}

export default ViewStories