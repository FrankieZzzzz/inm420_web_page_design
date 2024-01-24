import React from 'react';
import './App.scss';
import {Header,Detail,Hero} from './container'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Detail />
    </div>
  )
}

export default App
