import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="fixed right-0 top-0 z-[500] h-full pr-4">
        <ul className="flex w-auto list-none flex-col items-end justify-center space-x-0 space-y-10 md:h-full">
          <li>
            <a
              href="https://github.com/Jenny-Eikens"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="social-container group">
                <span className="social">Check out my Github profile!</span>
                <img src="/images/github-mark.png" alt="Github logo" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/Jenny-Eikens"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="social-container group">
                <span className="social">
                  Check out my Frontend Mentor profile!
                </span>
                <img
                  src="/images/frontend-mentor.svg"
                  alt="Frontend Mentor logo"
                  className="rounded-full bg-white p-2"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="mailto:jennifereikens@web.de" target="_blank">
              <div className="social-container group">
                <span className="social">Send me an email!</span>
                <div className="rounded-full bg-white">
                  <img
                    src="/images/envelope-simple.svg"
                    alt="Email logo"
                    className="p-2"
                  />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
