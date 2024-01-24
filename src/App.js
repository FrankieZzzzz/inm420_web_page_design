import React from 'react';
import './App.scss';
import {Header,Detail,Hero,Price} from './container'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Detail />
      <Price />
    </div>
  )
}

export default App
