import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="h-[80px] w-full px-4 py-4 md:fixed md:right-0 md:top-0 md:h-full md:w-[80px] md:py-0">
        <ul className="flex w-full list-none flex-row items-center justify-center space-x-10 md:h-full md:w-auto md:flex-col md:space-x-0 md:space-y-10">
          <li>
            <a
              href="https://github.com/Jenny-Eikens"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="social-container group">
                <span className="social">Check out my Github profile!</span>
                <img
                  src="/images/GitHub_Invertocat_Light.png"
                  alt="Github logo"
                />
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
