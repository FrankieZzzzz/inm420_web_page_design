import React from 'react'
import './Header.scss';
// import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'



const navigation = [
  { name: 'How it works', href: '#hero', current: true },
  { name: 'Who we are', href: '#detail', current: false },
  { name: 'What we do', href: '#price', current: false },
  { name: 'Contact us', href: '#footer', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow-lg z-20">
      {({ open }) => (
        <> 
          <div className=" max-w-7xl px-3 sm:px-4 lg:px-12 xl:max-w-screen-xl mx-auto">
            <div className="relative flex h-20 items-center justify-between">
              {/* Mobile menu button*/}
              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div>
                <span><FontAwesomeIcon icon={faTable} className='app__nav-gridIcon hidden sm:inline'/></span>
                <span className='text-2xl sm:font-semibold font-medium font-px-4 text-stone-700 px-4'>Grid</span>
              </div>
              {/* hearder nav */}
              <div className="flex flex-1 items-center justify-center sm:justify-items-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item,index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-stone-700 font-medium' : 'text-indigo-600 ',
                          'rounded-md py-2 lg:text-md text-xs font-light flex items-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        <span className={
                          classNames('app__nav-dot',
                          item.name === 'Contact us' ? 'hidden':'', 
                          index === navigation.length - 1 ? 'last-dot': '',
                          'invisible md:visible'
                          )}></span>
                      </a>
                      
                    ))}
                    
                  </div>
                </div>
              </div>
              <div>
                <a href="#/" class="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</a>
              </div>
            </div>
          </div>
          {/* burger menu drop down list */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
