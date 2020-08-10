import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './hero.css'

export default function Hero() {

    return (
        <div className="hero">
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="hero-heading">Lee Tann</h1>
                        <h2 className="hero-sub">Full-Stack Developer</h2>
                        <p className="start-btn"><Link to="about" spy={true} smooth={true} offset={-70} duration={700}><FaArrowDown /></Link></p>
                    </div>          
                </div>
            </section>
        </div>
    )
}
