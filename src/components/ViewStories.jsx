import React from 'react'
import Stories from './Stories'
// import CEOHarold from '../assets/images/CEOHarold.jpg';
// import ChiefEditorHarold from '../assets/images/ChiefEditorHarold.jpg';
// import FinaceHarold from '../assets/images/FinanceHarold.jpg';
// import ReceptionistHarold from '../assets/images/ReceptionistHarold.jpg';
// import HrHarold from '../assets/images/HrHarold.jpg';



var masterViewStories = [
  {
    names: 'Shirley Temple',
    location: 'Long Johns Seedy Bar',
    issue: 'The Bartender is watering down drinks!!!'
  },
  {
    names: 'Bob Marley',
    location: '4B',
    issue: 'Smoking mid'
  },
  {
    names: 'Imani and Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app.l :()'
  }

]


function ViewStories(){
  const PageStyle = {
    backgroundColor: 'blue'
  }

  return (
    <div>
      <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
    }
    `}</style>View Stories</h1>
     
      <hr/>
      <div style = {PageStyle}>
        {masterViewStories.map((stories, index) =>
          <Stories names={stories.names}
            location={stories.location}
            issue={stories.issue}
            key={index}/>
        )}
      </div>
    </div>
  )
}

export default ViewStories