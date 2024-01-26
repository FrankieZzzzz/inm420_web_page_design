import React from 'react';
import './App.scss';
import {Header,Detail,Hero,Price,Footer} from './container'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Detail />
      <Price />
      <Footer />
    </div>
  )
}

export default App
