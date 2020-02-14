import React from 'react'
import { Link } from 'react-router-dom';

function Nav(){
        return (
             <div className="nav-background">
                 <nav>
                     <a href="#" className="nav-padding">Home</a>
                     <Link to='/About' className="nav-padding">About</Link>
                     <a href="#" className="nav-padding">Our Story</a>
                     <a href="#" className="nav-padding">Contact us</a>
                 </nav>
            </div>
        );
}

export default Nav