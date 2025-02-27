'use client'
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Skills from './Skills'

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
        className="relative min-h-screen"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 400px)`,
        }}
      >
        <Header />
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="m-auto w-[90vw] max-w-[1300px] space-y-10 text-3xl md:pr-20">
          <section className="relative flex h-screen max-w-[1100px] flex-col items-start md:pl-[4rem]">
            <div className="mb-6 mt-[8rem]">
              <code className="text-[8rem] font-bold">&lt;&gt;</code>{' '}
              <h1 className="inline text-clip bg-gradient-heading bg-clip-text text-[8rem] font-bold leading-[7rem] text-transparent">
                Jennifer <br />
                Eikens
              </h1>{' '}
              <code className="text-[8rem] font-bold">&lt;/&gt;</code>
            </div>
            <h2 className="text-[4.5rem] font-bold">Frontend Developer</h2>
            {/* <FontAwesomeIcon
              icon={faArrowDown}
              className="m-auto h-[3rem] w-[3rem] self-end"
              beat
            /> */}
          </section>
          <section className="flex min-h-screen w-full flex-col border border-blue-600 p-4 md:h-screen">
            <Skills />
          </section>
        </main>
        <div className="relative md:hidden">
          <Sidebar />
        </div>
        {/*<footer className="bottom-1 mt-6 p-2 text-center text-sm md:bottom-0 md:p-0"></footer>*/}
      </div>
    </>
  )
}

export default Homepage
