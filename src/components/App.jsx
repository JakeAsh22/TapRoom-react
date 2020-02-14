
import React from 'react'
import Header from './Header'
import Stories from './Stories'
import { Switch, Route } from 'react-router-dom'
import ViewStories from './ViewStories'
import Error404 from './Error404'
import AboutUs from './AboutUs'
import Home from './Home'
import StorySuggestion from './StorySuggestion'
import Image from '../assets/images/wood_background.jpg'

function App(){
    const BackgroundStyle = {
    // /* The image used */
        backgroundImage: `url(${Image})`,

        /* Full height */
        backgroundPosition: 'fixed', 
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        minWidth: '100%'

    }
    return (
      <div style={BackgroundStyle}>
      
          <Header/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/AboutUs' component={AboutUs} /> 
              <Route path='/ViewStories' component={ViewStories} />
              <Route exact path='/StorySuggestion' component={StorySuggestion} />
              <Route component={Error404} />
            </Switch>
      
        </div>
    )
}
//using exact above helps protect us from accidently loading too many things
export default App