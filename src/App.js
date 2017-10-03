// @flow
import React from 'react'
import logo from './logo.svg'
import './App.css'
import add from './addFunction/index'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Using Flow with React</h1>
      </header>
      <div>
        <h4>Checking number types</h4>
        <p>
          The sum of 2 + 2 is <strong>{add(2, 2)}</strong>
        </p>
      </div>
    </div>
  )
}

export default App
