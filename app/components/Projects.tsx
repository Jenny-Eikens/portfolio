import React from 'react'

const Projects = () => {
  return (
    <>
      <h2 className="mb-6 pt-2 text-center text-3xl md:mb-8">My projects</h2>
      <div className="projects-wrapper w-full space-y-2 md:space-y-0">
        <div className="group">
          <a
            href="https://jenny-eikens.github.io/contact-form/"
            target="_blank"
          >
            <div className="preview-card">
              <h3 className="preview-title group-hover:text-secondary">
                Contact Form
              </h3>
              <img
                src="/images/contact-form.png"
                alt=""
                className="preview-image aspect-video"
              />
              <ul className="projects-list">
                <li>
                  <span className="list-heading">Framework</span>: React
                </li>
                <li>
                  <span className="list-heading">Features</span>: form
                  validation
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  responsive design, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="group">
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
                  responsive design, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="group">
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
                  responsive design, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="group">
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
                  drag-and-drop, dark mode
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  responsive design, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>

        <div className="group">
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

        <div className="group">
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
                  dark mode
                </li>
                <li>
                  <span className="list-heading">Skills showcased</span>:
                  responsive design, accessibility
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects
