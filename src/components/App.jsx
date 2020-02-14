import React from 'react';
import Nav from './Nav';
import SeasonSideBar from './SeasonSideBar';
import MainSchedule from './MainSchedule';
import "./../styles.css";
import { Switch, Route } from 'react-router-dom';
import About from './About';


function App(){
    return (
        <div>
            <Nav />
            <switch>
                <div className="two-columns">
                    <SeasonSideBar />
                    < Route exact path='/' component={MainSchedule} />
                    <Route path='/about' component={About}/>
                </div>
            </switch>
        </div>
    );
}

export default App;