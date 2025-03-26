'use client'

import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect'

const Skills = () => {
  const [visibleSections, setVisibleSections] = useState<
    Record<string, boolean>
  >({})
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id
          if (sectionId) {
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId]: entry.isIntersecting,
            }))
            if (sectionId === 'typewriter' && entry.isIntersecting) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0 },
    )

    const sections = document.querySelectorAll('.observe')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect() // Cleanup observer
  }, [])

  return (
    <>
      <div className="observe mb-6 pt-2 text-center text-3xl" id="typewriter">
        {visibleSections['typewriter'] && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('My skills include...')
                .callFunction(() => setTypingDone(true))
                .start()
            }}
            options={{
              autoStart: false,
              loop: false,
              cursor: '',
              delay: 80,
            }}
          />
        )}
      </div>

      <div className="skills-wrapper flex h-full w-full flex-col items-center justify-evenly space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
        <div
          className={`skill-category-wrapper observe ${visibleSections['frontend'] && typingDone ? 'show' : 'hide'}`}
          id="frontend"
        >
          <h3 className="skill-heading">Frontend Development</h3>
          <h4 className="skill-subheading">Core Technologies</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <img src="/images/html.png" alt="HTML icon" />
              <span>HTML</span>
            </li>
            <li className="skill-name-wrapper">
              <img src="/images/css-3.png" alt="CSS icon" />
              <span>CSS</span>
            </li>
            <li className="skill-name-wrapper">
              <img src="/images/js.png" alt="JavaScript icon" />
              <span>JavaScript</span>
            </li>
            <li className="skill-name-wrapper">
              <img src="/images/typescript.png" alt="TypeScript icon" />
              <span>TypeScript</span>
            </li>
          </ul>
        </div>

        <div
          className={`skill-category-wrapper observe ${visibleSections['frameworks'] && typingDone ? 'show' : 'hide'}`}
          id="frameworks"
        >
          <h3 className="skill-heading">Frameworks & Libraries</h3>
          <h4 className="skill-subheading">Styling & UI</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <img src="/images/tailwind.png" alt="TailwindCSS icon" />
              <span>TailwindCSS</span>
            </li>
            <li className="skill-name-wrapper">
              <FontAwesomeIcon icon={faBootstrap} />
              <span>Bootstrap</span>
            </li>
            <li className="skill-name-wrapper">
              <img src="/images/daisyui.png" alt="DaisyUI icon" />
              <span>DaisyUI</span>
            </li>
          </ul>
          <h4 className="skill-subheading mt-6">JavaScript Frameworks</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <img src="/images/atom.png" alt="React icon" />
              <span>React</span>
            </li>
            <li className="skill-name-wrapper">
              <img
                src="/images/next-js.svg"
                alt="Next.js icon"
                className="rounded-full border border-white bg-white"
              />
              <span>Next.js</span>
            </li>
          </ul>
        </div>

        <div
          className={`skill-category-wrapper observe ${visibleSections['essentials'] && typingDone ? 'show' : 'hide'}`}
          id="essentials"
        >
          <h3 className="skill-heading">Other Essential Skills</h3>
          <h4 className="skill-subheading">Web Development Concepts</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <img
                src="/images/responsive.png"
                alt="Responsiveness icon"
                className="dev-concept"
              />
              <span>Responsive Design</span>
            </li>
            <li className="skill-name-wrapper">
              <img
                src="/images/approval.png"
                alt="Form validation icon"
                className="dev-concept"
              />
              <span>Form Validation</span>
            </li>
            <li className="skill-name-wrapper">
              <img
                src="/images/accessibility.png"
                alt="Accessibility icon"
                className="dev-concept"
              />
              <span>Accessibility</span>
            </li>
            <li className="skill-name-wrapper">
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
