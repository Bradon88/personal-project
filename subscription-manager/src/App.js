import React from 'react'
import './App.css'
import axios from 'axios'

import routes from './routes'
import Header from './components/Header'
import Auth from './components/Auth'
import Add from './components/Add'
import mySubscriptions from './components/mySubscriptions'


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  )
}


export default App;
