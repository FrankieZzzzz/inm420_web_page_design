import React from 'react'
import './Detial.scss'
function Detial() {

  return (
    <>
      <section>
        {/* title */}
        <div>
          <h1>Combine fine images</h1>
          <h3>To represent a product</h3>
        </div>
        {/* photo wall */}
        <div class="grid grid-cols-12 grid-rows-12 app__detial-photoWall">
          <div class="col-span-3 row-span-2">
            <p>Use mixed grid with imagery, replace with your own photos and descriptions</p>
          </div>
          <div class="col-span-5 row-span-7">2</div>
          <div class="col-span-4 row-span-1">空白</div>
          <div class="col-span-4 row-span-2">3</div>
          <div class="col-span-3 row-span-7">4</div>
          <div class="col-span-2 row-span-4">5</div>
          <div class="col-span-2 row-span-4">6</div>
          <div class="col-span-3 row-span-4">7</div>
          <div class="col-span-4 row-span-5">8</div>
          <div class="col-span-2 row-span-4">10</div>
          <div class="col-span-3 row-span-2">11</div>
        </div>
      </section>
    </>
  )
}

export default Detial
