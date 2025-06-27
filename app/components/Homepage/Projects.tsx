import React from 'react'
import { fetchProjects } from '@/lib/fetchProjects'

export type ProjectType = {
  href: string
  title: string
  src: string
  framework: string
  features: string
  skills: string
}

const Projects = async () => {
  const projects: ProjectType[] = await fetchProjects()

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
                    <span className="list-heading">Skills showcased</span>:
                    {skills}
                  </li>
                </ul>
              </div>
            </a>
          </div>
        ))}

        {/* <div className="project-wrapper group">
          <a
            href="https://ip-address-tracker-three-kohl.vercel.app/"
            target="_blank"
          >
            <div className="preview-card">
              <h3 className="preview-title group-hover:text-secondary">
                IP Address Tracker
              </h3>
              <img
                src="/images/ip-tracker.png"
                alt=""
                className="preview-image aspect-video"
              />
              <ul className="projects-list">
                <li>
                  <span className="list-heading">Framework</span>: Next
                </li>
                <li>
                  <span className="list-heading">Features</span>: APIs
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  responsive design, APIs
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project-wrapper group">
          <a
            href="https://jenny-eikens.github.io/e-commerce-page/"
            target="_blank"
          >
            <div className="preview-card">
              <h3 className="preview-title group-hover:text-secondary">
                E-Commerce Product Page
              </h3>
              <img
                src="/images/e-commerce.png"
                alt=""
                className="preview-image aspect-video"
              />
              <ul className="projects-list">
                <li>
                  <span className="list-heading">Framework</span>: React
                </li>
                <li>
                  <span className="list-heading">Features</span>: image gallery,
                  shopping cart functionality
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  responsive layout, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project-wrapper group">
          <a href="https://todo-app-gray-nine-49.vercel.app/" target="_blank">
            <div className="preview-card">
              <h3 className="preview-title group-hover:text-secondary">
                Todo App
              </h3>
              <img
                src="/images/todo-app.png"
                alt=""
                className="preview-image aspect-video"
              />
              <ul className="projects-list">
                <li>
                  <span className="list-heading">Framework</span>: Next
                </li>
                <li>
                  <span className="list-heading">Features</span>: filtering,
                  drag-and-drop, dark mode, local storage
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project-wrapper group">
          <a href="https://job-listings-iota-peach.vercel.app/" target="_blank">
            <div className="preview-card">
              <h3 className="preview-title group-hover:text-secondary">
                Job Listings
              </h3>
              <img
                src="/images/job-listings.png"
                alt=""
                className="preview-image aspect-video"
              />
              <ul className="projects-list">
                <li>
                  <span className="list-heading">Framework</span>: Next
                </li>
                <li>
                  <span className="list-heading">Features</span>: filtering
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  responsive design, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="project-wrapper group">
          <a href="https://comment-section-kohl.vercel.app/" target="_blank">
            <div className="preview-card">
              <h3 className="preview-title group-hover:text-secondary">
                Interactive Comment Section
              </h3>
              <img
                src="/images/comment-section.png"
                alt=""
                className="preview-image aspect-video"
              />
              <ul className="projects-list">
                <li>
                  <span className="list-heading">Framework</span>: Next
                </li>
                <li>
                  <span className="list-heading">Features</span>: functionality
                  for editing/deleting/adding comments, replying to comments,
                  dark mode, local storage
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  recursion, responsive design, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div> */}
      </div>
    </>
  )
}

export default Projects

// {
//         "href": ,
//         "title": "Band Homepage",
//         "src": ,
//         "framework": "Next",
//         "features:": "contact form, image carousel, skip linnks",
//         "skills": "custom validation, accessibility"
//     },
