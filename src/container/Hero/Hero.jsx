import React from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


function Hero() {
  return (
    <section className='app__hero-section'>
      <div className='app__hero mx-auto z-10 mb-48 max-w-7xl px-2 sm:px-4 lg:px-12 xl:max-w-screen-xl '>
        {/* title */}
        <div className='app__hero-title '> 
          <div className='pt-8'>
            <h1 className='text-center font-semibold '><span className='block sm:inline text-6xl sm:text-7xl font-bold tracking-wide'>Combine</span><span className='text-5xl sm:text-7xl sm:font-bold'> <span className='text-red-600'>fine</span> image</span></h1>
          </div>
          <h3 className='text-2xl sm:text-3xl text-center mx-6 px-8 py-5 sm:font-bold'>To create any grid by scaling and resizing</h3>
          <FontAwesomeIcon icon={faArrowDown} className='text-indigo-600 w-full text-center text-2xl visible sm:invisible'/>
        </div>

        {/* photo wall */}
        <div className='app__hero-photoBox  mx-auto overflow-hidden mt-8'>
            <div class="app__hero-photoWall overflow-hidden">
              <div class="col-span-5 row-span-2 invisible sm:visible grid-box-1">
                <p>Use mixed grid with imagery, replace with your own photos and descriptions</p>
              </div>
              <div class="col-span-9 row-span-7 grid-box-2 center-image"></div>
              <div class="col-span-4 row-span-1 invisible sm:visible"></div>
              <div class="col-span-4 row-span-2 invisible sm:visible">
                <p>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
              </div>
              <div class="col-span-5 row-span-7 grid-box-4 center-image"></div>
              <div class="col-span-2 row-span-4 grid-box-5 center-image"></div>
              <div class="col-span-2 row-span-4 grid-box-6 center-image"></div>
              <div class="col-span-4 row-span-4 grid-box-7 center-image"></div>
              <div class="col-span-7 row-span-5 grid-box-8 center-image"></div>
              <div class="col-span-2 row-span-3 grid-box-9 center-image"></div>
            
              <div class="col-span-5 row-span-1 mt-5 w-full">
                <a href="#/" class=" rounded-full bg-indigo-600 px-10 py-4 mt-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn more</a>
              </div>
            </div>
          </div>
           {/* <div className='app__hero-photoBox  mx-auto overflow-hidden mt-8'>
            <div class="app__hero-photoWall overflow-hidden">
              <div class="invisible sm:visible grid-box-1">
                <p>Use mixed grid with imagery, replace with your own photos and descriptions</p>
              </div>
              <div class="grid-box-2 center-image"></div>
              <div class="invisible sm:visible"></div>
              <div class="invisible sm:visible">
                <p>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
              </div>
              <div class="grid-box-4 center-image"></div>
              <div class="grid-box-5 center-image"></div>
              <div class="grid-box-6 center-image"></div>
              <div class="grid-box-7 center-image"></div>
              <div class="grid-box-8 center-image"></div>
              <div class="grid-box-9 center-image"></div>
            
              <div class="col-span-5 row-span-1 mt-5 w-full">
                <a href="#/" class=" rounded-full bg-indigo-600 px-10 py-4 mt-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn more</a>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default Hero;
