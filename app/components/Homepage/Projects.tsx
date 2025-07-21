import React from 'react'
import type { ProjectsProps } from '@/types/projects'

const Projects = ({ projects }: ProjectsProps) => {
  if (!projects) {
    console.error('Missing required data:', { projects })
    return <div>Error loading data</div>
  }

  return (
    <>
      <h2 className="mb-6 pt-2 text-center text-3xl md:mb-10">
        Here&apos;s a look at some of my projects so far:
      </h2>
      <div className="projects-wrapper w-full space-y-2 md:space-y-0">
        {projects.map(({ href, title, src, framework, features, skills }) => (
          <div key={href} id={href} className="project-wrapper group">
            <a href={href} target="_blank">
              <div className="preview-card">
                <h3 className="preview-title group-hover:text-secondary">
                  {title}
                </h3>
                <img
                  src={src}
                  alt={`Preview image of ${title}`}
                  className="preview-image aspect-video"
                />
                <ul className="projects-list">
                  <li>
                    <span className="list-heading">Framework</span>: {framework}
                  </li>
                  <li>
                    <span className="list-heading">Features</span>: {features}
                  </li>
                  <li>
                    <span className="list-heading">Skills showcased</span>:{' '}
                    {skills}
                  </li>
                </ul>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
