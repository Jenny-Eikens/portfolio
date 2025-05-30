'use client'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    {
      target: '',
      title: '// home',
    },
    {
      target: 'skills',
      title: '// skills',
    },
    {
      target: 'projects',
      title: '// projects',
    },
    {
      target: 'contact',
      title: '// contact',
    },
  ]

  return (
    <>
      <header className="absolute h-[5rem] w-full pt-2">
        <div className="flex flex-col items-start">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="relative left-2 top-0 z-50 p-3 md:hidden"
          >
            {menuOpen ? (
              <XMarkIcon className="h-10 w-10" />
            ) : (
              <Bars3Icon className="h-10 w-10" />
            )}
          </button>
          <nav
            className={`fixed left-0 top-0 z-40 flex h-full w-full flex-col bg-secondary pl-[0.5rem] transition-transform duration-300 md:pl-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:left-auto md:top-auto md:mx-auto md:max-w-[600px] md:translate-x-0 md:flex-row md:bg-transparent`}
          >
            <ul className="mt-[6rem] list-none justify-between space-y-10 p-3 text-3xl md:mt-0 md:flex md:w-full md:flex-row md:space-y-0 md:text-2xl">
              {navItems.map((item, index) => (
                <li key={index} onClick={() => setMenuOpen(false)}>
                  <a href={`#${item.target}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
