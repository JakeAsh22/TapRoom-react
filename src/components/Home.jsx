import React from 'react'
import { Link } from 'react-router-dom'
import homepage from '../assets/images/wood_background.jpg'


function Home() {
    const HomeStyle = {
        textAlign: 'center'
    }
    return (
      <div style = {HomeStyle}>
          <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
    }
    `}</style>Heralding Harold</h1>
        </div>
    )
}

export default Home