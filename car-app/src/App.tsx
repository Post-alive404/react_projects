// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Counter from './assets/components/Counter';
import './App.css'
import AuthContext from './assets/components/AuthContext';
import HelloComponent from './assets/components/HelloComponent';
import React from 'react';


function App() {


  const userName = 'Denn';

  return (
    <>
      <h1>Hello React</h1>
      <div className="card">
      <AuthContext.Provider value={userName}>
        <Counter />
      </AuthContext.Provider>
      <HelloComponent name="ddd" age={12}/>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
