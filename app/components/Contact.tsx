import React from 'react'

const Contact = () => {
  return (
    <>
      <h2 className="text-center text-3xl">Let&apos;s get in touch!</h2>
      <div>
        <div className="contact-container outline outline-white">
          <a
            href="https://github.com/Jenny-Eikens"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="flex items-center outline outline-purple-500">
              <img
                src="/images/GitHub_Invertocat_Light.png"
                alt="Github logo"
                // className="origin-left scale-50"
              />
              <span>Check out my Github profile!</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
