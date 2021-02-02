import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Typical from 'react-typical'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='hero-heading'>
              LEE <span>TANN</span>
            </h1>
            <p className='hero-sub'>
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Software Engineer',
                  2000,
                  'Full-Stack Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Backend Engineer',
                  2000,
                  'React Developer',
                  2000,
                  'Node.js Developer',
                  2000,
                  'Python Developer',
                  2000,
                ]}
              />
            </p>

            <p className='start-btn'>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <FaArrowDown />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
