'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  const [visibleSections, setVisibleSections] = useState<
    Record<string, boolean>
  >({})

  const updateVisibility = (entries: IntersectionObserverEntry[]) => {
    const updates = entries.reduce(
      (acc: Record<string, boolean>, entry: IntersectionObserverEntry) => {
        const sectionId = entry.target.id
        if (sectionId) {
          acc[sectionId] = entry.isIntersecting
        }
        return acc
      },
      {},
    )
    setVisibleSections((prev) => ({ ...prev, ...updates }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(updateVisibility, {
      threshold: 0.05,
    })

    const sections = document.querySelectorAll('.observe')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <h2 className="mb-6 pt-2 text-center text-3xl">My skills include:</h2>

      <div className="skills-wrapper flex h-full w-full flex-col items-center justify-evenly space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
        <div
          className={`skill-category-wrapper observe ${visibleSections['frontend'] ? 'show' : 'hide'}`}
          id="frontend"
        >
          <h3 className="skill-heading">Frontend Development</h3>
          <h4 className="skill-subheading">Core Technologies</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <Image
                src="/images/html.png"
                width={40}
                height={40}
                alt="HTML icon"
              />
              <span>HTML</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                src="/images/css-3.png"
                width={40}
                height={40}
                alt="CSS icon"
              />
              <span>CSS</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/js.png"
                alt="JavaScript icon"
              />
              <span>JavaScript</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/typescript.png"
                alt="TypeScript icon"
              />
              <span>TypeScript</span>
            </li>
          </ul>
        </div>

        <div
          className={`skill-category-wrapper observe ${visibleSections['frameworks'] ? 'show' : 'hide'}`}
          id="frameworks"
        >
          <h3 className="skill-heading">Frameworks & Libraries</h3>
          <h4 className="skill-subheading">Styling & UI</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/tailwind.png"
                alt="TailwindCSS icon"
              />
              <span>TailwindCSS</span>
            </li>
            <li className="skill-name-wrapper">
              <FontAwesomeIcon icon={faBootstrap} />
              <span>Bootstrap</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/daisyui.png"
                alt="DaisyUI icon"
              />
              <span>DaisyUI</span>
            </li>
          </ul>
          <h4 className="skill-subheading mt-6">JavaScript Frameworks</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/atom.png"
                alt="React icon"
              />
              <span>React</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/next-js.svg"
                alt="Next.js icon"
                className="rounded-full border border-white bg-white"
              />
              <span>Next.js</span>
            </li>
          </ul>
        </div>

        <div
          className={`skill-category-wrapper observe ${visibleSections['essentials'] ? 'show' : 'hide'}`}
          id="essentials"
        >
          <h3 className="skill-heading">Other Essential Skills</h3>
          <h4 className="skill-subheading">Web Development Concepts</h4>
          <ul className="skill-list">
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/responsive.png"
                alt="Responsiveness icon"
                className="dev-concept"
              />
              <span>Responsive Design</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/approval.png"
                alt="Form validation icon"
                className="dev-concept"
              />
              <span>Form Validation</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
                src="/images/accessibility.png"
                alt="Accessibility icon"
                className="dev-concept"
              />
              <span>Accessibility</span>
            </li>
            <li className="skill-name-wrapper">
              <Image
                width={40}
                height={40}
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
