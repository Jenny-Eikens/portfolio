'use client'
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Skills from './Skills'
import Projects from './Projects'

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="relative min-h-screen overflow-x-hidden outline outline-white"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 400px)`,
        }}
      >
        <Header />
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="m-auto w-[90vw] max-w-[1200px] space-y-10 text-2xl md:pr-20">
          <section className="relative flex h-screen max-w-[1100px] flex-col items-start md:pl-[4rem]">
            <div className="mb-6 mt-[6rem] md:mt-[8rem]">
              <code className="text-[3rem] font-bold md:text-[6rem]">
                &lt;&gt;
              </code>{' '}
              <h1 className="inline text-clip bg-gradient-heading bg-clip-text text-[4.5rem] font-bold leading-[5rem] text-transparent md:text-[8rem] md:leading-[7rem]">
                Jennifer <br />
                Eikens
              </h1>{' '}
              <code className="text-[3rem] font-bold md:text-[6rem]">
                &lt;/&gt;
              </code>
            </div>
            <h2 className="text-[3rem] font-bold leading-[3rem] md:text-[4rem]">
              Frontend Developer
            </h2>
            {/* <FontAwesomeIcon
              icon={faArrowDown}
              className="m-auto h-[3rem] w-[3rem] self-end"
              beat
            /> */}
          </section>
          <section
            className="flex min-h-screen w-full flex-col outline outline-purple-500 md:h-screen"
            id="skills"
          >
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
        <div className="relative md:hidden">
          <Sidebar />
        </div>
        <footer className="bottom-1 mt-6 p-2 text-center text-sm md:bottom-0 md:p-0">
          <a href="https://www.flaticon.com/free-icons/html" title="html icons">
            Html icons created by Freepik - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/css" title="css icons">
            Css icons created by Pixel perfect - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/javascript"
            title="javascript icons"
          >
            Javascript icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/typescript"
            title="typescript icons"
          >
            Typescript icons created by Freepik - Flaticon
          </a>
          <a href="https://commons.wikimedia.org/wiki/File:Tailwind_CSS_Logo.svg">
            Tailwind CSS
          </a>
          ,{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0">
            CC BY-SA 4.0
          </a>
          , via Wikimedia Commons
          <a
            href="https://www.flaticon.com/free-icons/react"
            title="react icons"
          >
            React icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/tablet"
            title="tablet icons"
          >
            Tablet icons created by smalllikeart - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/validation"
            title="validation icons"
          >
            Validation icons created by lutfix - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/accessibility"
            title="accessibility icons"
          >
            Accessibility icons created by juicy_fish - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/api" title="api icons">
            Api icons created by Candy Design - Flaticon
          </a>
        </footer>
      </div>
    </>
  )
}

export default Homepage
