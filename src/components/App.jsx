
import React from 'react'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import Home from './Home'
import NewTap from './NewTap'
import Image from '../assets/images/wood_background.jpg'

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      masterMenu: []
    }
    this.handleAddingNewTapToMenu = this.handleAddingNewTapToMenu.bind(this)
  }
  handleAddingNewTapToMenu(newTap) {
    var newMasterMenu = this.state.masterMenu.slice()
    newMasterMenu.push(newTap)
    this.setState({masterMenu: newMasterMenu})
  }

  render(){
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
          <Route exact path='/' render = {()=><Home home={this.state.masterMenu} />} />
          <Route exact path='/NewTap' render={()=><NewTap onNewTapCreation={this.handleAddingNewTapToMenu}/>} />
          <Route component={Error404} />
        </Switch>
        
      </div>
    )
  }
}
//using exact above helps protect us from accidently loading too many things
export default App