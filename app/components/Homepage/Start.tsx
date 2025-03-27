import React from 'react'
import TypeIt from 'typeit-react'

const Start = () => {
  return (
    <>
      <div className="text-center md:mb-6 md:text-left">
        <code>&lt;&gt;</code>
        <h1 className="inline text-clip bg-gradient-heading bg-clip-text text-[5rem] font-bold leading-[5rem] text-transparent md:text-[8rem] md:leading-[7rem]">
          Jennifer <br />
          Eikens
        </h1>
        <code>&lt;/&gt;</code>
      </div>
      <h2 className="text-[3rem] font-bold leading-[3rem] md:text-[4rem]">
        <TypeIt
          options={{
            strings: ['Frontend Developer'],
            speed: 100,
            loop: false,
            cursor: true,
            waitUntilVisible: true,
          }}
        />
      </h2>
    </>
  )
}

export default Start
