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
                <ul>
                    <li><Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={-70} duration={800}>About</Link></li>
                    <li><Link to="projects" spy={true} smooth={true} offset={-70} duration={800}>Project</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={800}>Contacts</Link></li>
                </ul>
                <div>
                    <img src="mylogo2.png" alt="logo" className="logo2" /> 
                </div>
            </nav>
        </>
    )
}

