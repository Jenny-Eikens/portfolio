'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

const Skills = ({ text = 'My skillset includes...', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isVisible, setIsVisible] = useState<boolean | undefined>()
  const myRef = useRef(null)

  useEffect(() => {
    if (!myRef.current) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)

    return () => observer.disconnect() // Cleanup observer
  }, []) // Only run once

  useEffect(() => {
    if (!isVisible) return

    setDisplayedText('') // Reset text properly before animation starts

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex])
        currentIndex++
      }
    }, speed)

    return () => clearInterval(interval) // Cleanup interval when unmounting
  }, [isVisible, text, speed]) // Runs when visibility changes

  return (
    <>
      <h2 className="mb-6 pt-2 text-center text-3xl" ref={myRef}>
        {displayedText}
      </h2>

      <div className="skills-wrapper flex h-full w-full flex-col items-center justify-evenly space-y-4 border-2 border-blue-500 md:flex-row md:items-center md:space-y-0">
        <div className="category-wrapper outline outline-purple-400">
          <h3 className="skill-heading">Frontend Development</h3>
          <h4 className="subheading">Core Technologies</h4>
          <ul className="skill-list">
            <li className="skill-wrapper">
              <img src="/images/html.png" alt="HTML icon" />
              <span>HTML</span>
            </li>
            <li className="skill-wrapper">
              <img src="/images/css-3.png" alt="CSS icon" />
              <span>CSS</span>
            </li>
            <li className="skill-wrapper">
              <img src="/images/js.png" alt="JavaScript icon" />
              <span>JavaScript</span>
            </li>
            <li className="skill-wrapper">
              <img src="/images/typescript.png" alt="TypeScript icon" />
              <span>TypeScript</span>
            </li>
          </ul>
        </div>

        <div className="category-wrapper">
          <h3 className="skill-heading">Frameworks & Libraries</h3>
          <h4 className="subheading">Styling & UI</h4>
          <ul className="skill-list">
            <li className="skill-wrapper">
              <img src="/images/tailwind.png" alt="TailwindCSS icon" />
              <span>TailwindCSS</span>
            </li>
            <li className="skill-wrapper">
              <FontAwesomeIcon icon={faBootstrap} />
              <span>Bootstrap</span>
            </li>
            <li className="skill-wrapper">
              <img src="/images/daisyui.png" alt="DaisyUI icon" />
              <span>DaisyUI</span>
            </li>
          </ul>
          <h4 className="subheading mt-6">JavaScript Frameworks</h4>
          <ul className="skill-list">
            <li className="skill-wrapper">
              <img src="/images/atom.png" alt="React icon" />
              <span>React</span>
            </li>
            <li className="skill-wrapper">
              <img
                src="/images/next-js.svg"
                alt="Next.js icon"
                className="rounded-full border border-white bg-white"
              />
              <span>Next.js</span>
            </li>
          </ul>
        </div>

        <div className="category-wrapper">
          <h3 className="skill-heading">Other Essential Skills</h3>
          <h4 className="subheading">Web Development Concepts</h4>
          <ul className="skill-list">
            <li className="skill-wrapper">
              <img
                src="/images/responsive.png"
                alt="Responsiveness icon"
                className="dev-concept"
              />
              <span>Responsive Design</span>
            </li>
            <li className="skill-wrapper">
              <img
                src="/images/approval.png"
                alt="Form validation icon"
                className="dev-concept"
              />
              <span>Form Validation</span>
            </li>
            <li className="skill-wrapper">
              <img
                src="/images/accessibility.png"
                alt="Accessibility icon"
                className="dev-concept"
              />
              <span>Accessibility</span>
            </li>
            <li className="skill-wrapper">
              <img
                src="/images/cloud-api.png"
                alt="API icon"
                className="dev-concept"
              />
              <span>APIs</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills
