import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="absolute bottom-0 h-[80px] w-full border-2 border-purple-500 px-4 py-4 md:fixed md:right-0 md:h-full md:w-[80px] md:py-0">
        <ul className="flex w-full list-none flex-row items-center justify-center space-x-10 border-2 border-blue-500 md:h-full md:w-auto md:flex-col md:space-x-0 md:space-y-10">
          <li>
            <a
              href="https://github.com/Jenny-Eikens"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="group relative flex items-center">
                <span className="absolute left-0 flex h-[40px] max-w-0 -translate-x-0 items-center overflow-hidden whitespace-nowrap rounded bg-white px-2 py-1 text-sm text-black opacity-0 transition-all duration-1000 ease-in-out group-hover:w-auto group-hover:max-w-[250px] group-hover:-translate-x-full group-hover:opacity-100">
                  Check out my Github profile!
                </span>
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
              <div className="group relative flex items-center">
                <span className="absolute left-0 flex h-[40px] max-w-0 -translate-x-0 items-center overflow-hidden whitespace-nowrap rounded bg-white px-2 py-1 text-sm text-black opacity-0 transition-all duration-1000 ease-in-out group-hover:w-auto group-hover:max-w-[250px] group-hover:-translate-x-full group-hover:opacity-100">
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
              <div className="group relative flex items-center">
                <span className="absolute left-0 flex h-[40px] max-w-0 -translate-x-0 items-center overflow-hidden whitespace-nowrap rounded bg-white px-2 py-1 text-sm text-black opacity-0 transition-all duration-1000 ease-in-out group-hover:w-auto group-hover:max-w-[250px] group-hover:-translate-x-full group-hover:opacity-100">
                  Send me an email!
                </span>
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
