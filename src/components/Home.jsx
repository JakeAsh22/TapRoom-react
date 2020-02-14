import React from 'react'

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