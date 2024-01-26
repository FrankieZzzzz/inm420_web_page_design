import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faLinkedinIn, faSquareTwitter,faSquareYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1200);
        };
        window.addEventListener('resize', handleResize )
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [])

  if (isMobile) {
    return (
      <section className='app__footer container text-center mt-16 mb-10 text-sm mx-auto'>
        <ul className=''>
          <li className='pb-2'>Copyright © 2018 <span className=''></span> Your Company</li>
          <li className='pb-2'>All rights reserved</li>
          <li className='pb-2 text-teal-500'>Made in Setproduct.com</li>
          <li className='pb-2 text-teal-500'>One man digital agency</li>
          <li className='text-lg text-indigo-600 font-semibold'>hello@setproduct.com</li>
        </ul>
        <div className='flex items-center justify-around mt-6 max-w-72 mx-auto'>
          <FontAwesomeIcon icon={faFacebookF}  className='h-5 w-5 flex-none p-2 '/>
          <FontAwesomeIcon icon={faLinkedinIn} className='h-5 w-5 flex-none  p-2 '/>
          <FontAwesomeIcon icon={faHashtag} className='h-5 w-5 flex-none  p-2 '/>
          <FontAwesomeIcon icon={faSquareTwitter} className='h-5 w-5 flex-none  p-2 '/>
          <FontAwesomeIcon icon={faSquareYoutube} className='h-5 w-5 flex-none  p-2 '/>
        </div>
      </section>
    )
  }else{
    return(
      <section className='app__footer container mt-16 mb-40 text-sm mx-auto xl:px-12 xl:max-w-screen-xl flex items-start justify-between'>
        {/* icon and email */}
        <div className='flex'>
          <div >
            <div className='mb-10'>
              <p className='text-xs text-gray-500 pb-4 tracking-widest'>FOLLOW US</p>
              <div className='flex flex-row  text-indigo-600'>
                <FontAwesomeIcon icon={faFacebookF}  className='h-5 w-5 flex-none p-2 pe-8'/>
                <FontAwesomeIcon icon={faLinkedinIn} className='h-5 w-5 flex-none  p-2 pe-8'/>
                <FontAwesomeIcon icon={faHashtag} className='h-5 w-5 flex-none  p-2 pe-8'/>
                <FontAwesomeIcon icon={faSquareTwitter} className='h-5 w-5 flex-none  p-2 '/>
              </div>
            </div>
            <div>
              <p className='text-xs text-gray-500 pb-6 tracking-widest'>INFORMATION</p>
              <ul className='grid grid-cols-3 gap-4 gap-x-14 text-sm text-gray-600'>
                <li>About Fapster app</li>
                <li>Onhovered / Active</li>
                <li>We are hiring!</li>
                <li>Get in Touch</li>
                <li>Privacy Policy</li>
                <li>Resources</li>
                <li>Things We Like</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
         
        </div>
        {/* linke and form */}
        <div className=''>
           <div className='mb-10'>
            <p className='text-xs text-gray-500 tracking-widest'>FOLLOW US</p>
            <p className='text-lg text-indigo-600 font-semibold tracking-wide'>hello@setproduct.com</p>
          </div>
          <div>
            <p className='text-xs text-gray-500 tracking-widest pb-6'>KEEP IN TOUCH</p>
            <form action="get" className=''>
              <div className='flex gap-4 mb-5'>
                <input type="text" value='Your name' class="block rounded-xl px-3 py-1 text-gray-400 shadow-sm ring-inset ring-gray-300 bg-gray-100 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"/>
                <input type="text" value='Email' class="block rounded-xl px-3 py-1 text-gray-400 shadow-sm ring-inset ring-gray-300 bg-gray-100  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
              <div className='flex gap-4 items-start'>
                <textarea type="text" value='Leave your message' class="block bg-gray-100 rounded-xl border-0 px-3 py-3 pe-16 text-indigo-600 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-sm lg:leading-6"></textarea>
                <input type="button" value='SEND' className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 "/>
              </div>
            </form>
          </div>
        </div>
      </section>  
    )
  }
  
}

export default Footer