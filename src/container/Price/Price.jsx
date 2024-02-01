import React from 'react';
import './Price.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



function Price() {
  const contentList = [
    {
      type:'Individual',
      price: '$8.99',
      option: ['20 hosting / month', '1GB storage','1 year support','Constant updates'],
      topButtonText: 'FINE!',
      buttonText: 'Get started!'
    },
    {
      type:'Professional',
      price: '$12.99',
      option: ['100 hosting / month', '10GB storage','5 year support','Constant updates'],
      topButtonText: 'GOOD!',
      buttonText: 'Select this plan!'
    },
    {
      type:'Enterprise',
      price: '$32.99',
      option: ['Unlimited hosting / month', 'Unlimited storage','Lifetime year support','Constant updates'],
      topButtonText: 'WOW!',
      buttonText: 'Start today!'
    },
   
  ]
  return (
    <>
      <section className='app__price container mt-16 md:mt-20 mx-auto max-w-7xl px-2 sm:px-4 lg:px-12 xl:max-w-screen-xl border-orange-700 pb-8' id='price'>
       {/* title */}
        <div className='px-2 lg:px-8 xl:py-6'>
          <h4 className='font-semibold text-2xl xl:text-6xl xl:text-center xl:font-extrabold'><span className='hidden xl:inline'>Affordable</span> Pricing</h4>
          <p className='text-xl xl:text-2xl md:text-lg text-gray-500 pt-3 max-w-4xl xl:max-w-full font-light xl:text-center xl:font-medium xl:py-4'>Bill me <span className='text_one'>monthly<span className='text_underline'></span></span> <span className='app__price-dot me-2 inline-block mb-1 text-gray-500'></span><span>yearly</span></p>
        </div>
        {/* cards */}
        <div className='mx-auto mt-12 sm:mt-2 lg:mx-0 lg:flex lg:justify-around px-2 lg:px-0'>
          {contentList.map(({type,price,option,topButtonText,buttonText},index) => (
            <div key={index} className='rounded-2xl app__price-card w-80 mx-auto lg:mx-0 ring-1 ring-gray-200 hover:shadow-xl bg-white'>
              {/* title */}
              <div className='flex items-center justify-between px-6 pt-4'>
                <h5 className='font-semibold text-lg'>{type}</h5>
                <button type="button" className="inline-flex items-center rounded-full bg-white px-8 py-2 text-sm font-semibold text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-3">
                {topButtonText}
                </button>
              </div>
              <div  className='px-6 lg:px-8 mb-6 pb-2 lg:pb-0'>
                <h5 className='text-indigo-600 text-2xl font-semibold'>{price}<span className='text-sm pl-4 font-medium'>/ MONTH</span></h5>
                <ul className='mt-4'>
                  {option.map((opt,dex) =>(
                    <li className='flex gap-x-3 items-center py-3' key={dex}>
                      <FontAwesomeIcon icon={faCheck} className='h-3.5 w-3.5 flex-none app__price-cardBtn p-2 rounded-full'/>
                      {opt}
                    </li>
                  ))}
                </ul>
                <div className='flex justify-center'>
                  <button type="button" className=" w-full text-center inline-flex items-center justify-center rounded-2xl bg-white text-sm hover:text-md font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 hover:text-white my-6 lg:my-3 px-10 py-4 transition-all ease-in duration-200">
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Price
