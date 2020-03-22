import React from 'react'
import { FaArrowDown, FaArrowUp, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
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
                        <h5>
                          <span><FaArrowUp /></span>
                          <span><FaArrowUp /></span>
                          <span><FaArrowDown /></span>
                          <span><FaArrowDown /></span>
                          <span><FaArrowLeft /></span>
                          <span><FaArrowRight /></span>
                          <span><FaArrowLeft /></span>
                          <span><FaArrowRight /></span>
                          <span>B</span>
                          <span>A</span>
                          <span>Select</span>
                          <span>Start</span>
                        </h5>
                        <p className="start-btn"><Link to="about" spy={true} smooth={true} offset={-70} duration={700}>START<br/><FaArrowDown /></Link></p>
                    </div>          
                </div>
            </section>
        </div>
    )
}
