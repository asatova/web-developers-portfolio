import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} style={{width:'74%',  borderRadius: '20px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 10px 15px;' }} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>

                <button className='primaryBtn'>Contact</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
