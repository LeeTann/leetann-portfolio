import React from 'react'
import { Link } from 'react-scroll'
import './nav.css'

export default function Nav() {
    return (
        <>
            <nav>
                <div>
                    <img src="mylogo2.png" alt="logo" className="logo1" />
                </div>
                <ul className="nav-links">
                    <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={-70} duration={700}>About</Link></li>
                    <li className="nav-item"><Link to="projects" spy={true} smooth={true} offset={-70} duration={700}>Projects</Link></li>
                    <li className="nav-item"><Link to="contact" spy={true} smooth={true} offset={-70} duration={700}>Contact</Link></li>
                    <li className="nav-item"><a href="https://resume.creddle.io/resume/93vhhbh9qu7" rel="noopener noreferrer" target="_blank">Resume</a></li>
                </ul>
                <div>
                    <img src="mylogo2.png" alt="logo" className="logo2" /> 
                </div>
            </nav>
        </>
    )
}

