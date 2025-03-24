'use client'
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Start from './Start'

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      console.log(mousePosition)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mousePosition])

  return (
    <>
      <div
        className="h-auto min-h-screen overflow-x-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y + window.scrollY}px, rgba(255, 255, 255, 0.05), transparent 400px)`,
        }}
      >
        <Header />
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="m-auto w-[90vw] max-w-[1200px] space-y-10 text-2xl md:pr-20">
          <section className="flex h-screen flex-col items-start justify-center md:pl-[4rem]">
            <Start />
          </section>
          <hr className="w-full" />

          <section
            className="flex min-h-screen w-full flex-col md:h-screen"
            id="skills"
          >
            <Skills />
            <hr />
          </section>

          <section className="min-h-screen" id="projects">
            <Projects />
            <hr />
          </section>

          <section id="contact" className="h-auto min-h-[35vh]">
            <Contact />
          </section>
        </main>

        <footer className="bottom-1 mt-6 flex flex-col items-center p-2 text-sm md:bottom-0">
          <h3 className="underline">Credits</h3>
          <div className="text-left">
            <a href="https://www.flaticon.com/icons" title="icons">
              Icons created by Freepik - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/css" title="css icons">
              Css icons created by Pixel perfect - Flaticon
            </a>

            <a href="https://creativecommons.org/licenses/by-sa/4.0">
              <span>Tailwind CSS, CC BY-SA 4.0, via Wikimedia Commons </span>
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
          </div>
        </footer>
      </div>
    </>
  )
}

export default Homepage
