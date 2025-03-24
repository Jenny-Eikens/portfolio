import React from 'react'

const Contact = () => {
  return (
    <>
      <h2 className="mb-10 text-center text-3xl">Let&apos;s get in touch!</h2>
      <div className="mb-10 flex h-full flex-col space-y-8 px-5 md:mb-0 md:flex-row md:justify-evenly md:space-y-0 md:px-0 md:py-8">
        <div className="contact-container">
          <a
            href="https://github.com/Jenny-Eikens"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="contact">
              <img
                src="/images/GitHub_Invertocat_Light.png"
                alt="Github logo"
                className="contact-image"
              />
              <span className="contact-title">Github</span>
            </div>
          </a>
        </div>

        <div className="contact-container">
          <a
            href="https://www.frontendmentor.io/profile/Jenny-Eikens"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="contact">
              <img
                src="/images/frontend-mentor.svg"
                alt="Frontend Mentor logo"
                className="contact-image rounded-full bg-white p-2"
              />
              <span className="contact-title">Frontend Mentor</span>
            </div>
          </a>
        </div>

        <div className="contact-container">
          <a href="mailto:jennifereikens@web.de" target="_blank">
            <div className="contact">
              <img
                src="/images/envelope-simple.svg"
                alt="Email logo"
                className="contact-image rounded-full bg-white p-2"
              />
              <span className="contact-title">Email</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
