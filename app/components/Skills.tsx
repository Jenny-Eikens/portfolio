'use client'

import React, { useState, useEffect } from 'react'

const Skills = ({ text = 'My skillset includes...', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= text.length) return
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index])
      setIndex((prev) => prev + 1)
    }, speed)
    return () => clearInterval(interval)
  }, [index, text, speed])

  return (
    <>
      <h2 className="text-4xl">{displayedText}</h2>

      <div className="skills-wrapper flex h-full w-full flex-col justify-between space-y-4 border border-purple-500 md:flex-row md:space-y-0">
        <div className="category-wrapper md:self-start">
          <h3 className="skill-heading">Frontend Development</h3>
          <h4 className="subheading">Core Technologies</h4>
          <ul className="list-none">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
          </ul>
        </div>

        <div className="category-wrapper md:self-center">
          <h3 className="skill-heading">Frameworks & Libraries</h3>
          <h4 className="subheading">Styling & UI</h4>
          <ul className="list-none">
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>DaisyUI</li>
          </ul>
          <h4 className="subheading mt-6">JavaScript Frameworks</h4>
          <ul className="list-none">
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="category-wrapper md:self-end">
          <h3 className="skill-heading">Other Essential Skills</h3>
          <h4 className="subheading">Web Development Concepts</h4>
          <ul className="list-none">
            <li>Responsive Design</li>
            <li>Form Validation</li>
            <li>Accessibility</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills
