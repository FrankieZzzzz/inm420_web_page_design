import React from 'react';
import './Detail.scss';

import iconSupport from '../../assets/images/icon-support.png';
import iconSales from '../../assets/images/icon-sales.png';
import iconCoponents from '../../assets/images/icon-light.png';
import iconLike from '../../assets/images/icon-like.png';



function Detail() {
  const detailContent = [
    {
      icon: iconSupport,
      name: 'Support',
      content:'Delivering faster and more personalized support with shared screens and cool design systems for Figma',
      Button:'Learn more',
      alt: 'Phone icon'
    },
    {
      icon: iconSales,
      name: 'Sales growth',
      content:'Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot',
      Button:'Learn more',
      alt: 'Pie graphic icon'
    },
    {
      icon: iconCoponents,
      name: 'Coponents-driven',
      content:'Delivering faster and more personalized support with shared screens and cool design systems for Figma',
      Button:'Learn more',
      alt: 'Light icon'
    },
    {
      icon: iconLike,
      name: 'Swap the icon',
      content:'You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter',
      Button:'Learn more',
      alt: 'Like icon'
    },
  ]

  return (
    <>
    <section className='app__Detail container mt-16 md:mt-20 mx-auto max-w-7xl px-2 sm:px-4 lg:px-12 xl:max-w-screen-xl'>
        <div className='px-2 lg:px-8 text-2xl'>
          <h4 className='font-semibold'>Delivering good designs <span className='block sm:inline text-indigo-600 pt-1'>since 1954 🚚💨</span></h4>
          <p className='text-base md:text-lg text-gray-500 pt-6 max-w-4xl'>We're the first multi-purpose design kit solutions for businesses. We help you bridge gaps between your layouts, templates and developers to empower all involved.</p>
        </div>
        <div>
          <ul className="px-2 lg:px-8 mx-auto mt-10 sm:mt-2 grid grid-cols-2 gap-x-4 gap-y-8 pt-6 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {detailContent.map((item,index) => (
              <li key={index} className="flex max-w-md flex-col items-start justify-between">
                <img src={item.icon} alt={item.alt} className='max-w-10'/>
              <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="">{item.name}</span>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">{item.content}</p>
              <button
                type="button"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-3"
                >
                  Learn more
              </button>
            </li>
          ))}
        </ul>
      </div>
      </section>
    </>
  )
}

export default Detail
