import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'
import { FaWindowClose, FaBars} from 'react-icons/fa'
import './nav.css'

export default function Nav() {
    const [mobileView, setMobileView] = useState(true)

    const checkMobileView = () => {
        (window.innerWidth <= 500) ? setMobileView(true) : setMobileView(false) 
    }

    useEffect(() => {
        return window.addEventListener('resize', checkMobileView)
    })

    return (
        <>
            <nav>
                <CSSTransition in={mobileView} timeout={100} classNames="hamburger">
                    <button className="nav-icon" onClick={() => setMobileView(prevOpen => !prevOpen)}>
                        {mobileView ? <FaBars/> : <FaWindowClose/>}
                    </button>
                </CSSTransition>
                <div>
                    <img src="mylogo2.png" alt="logo" className="logo1" />
                </div>
                <ul className="nav-links">
                    <li className="nav-item"><Link to="hero" spy={true} smooth={true} offset={-70} duration={700}>Home</Link></li>
                    <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={-70} duration={700}>About</Link></li>
                    <li className="nav-item"><Link to="projects" spy={true} smooth={true} offset={-70} duration={700}>Project</Link></li>
                    <li className="nav-item"><Link to="contact" spy={true} smooth={true} offset={-70} duration={700}>Contacts</Link></li>
                </ul>
                <div>
                    <img src="mylogo2.png" alt="logo" className="logo2" /> 
                </div>
            </nav>
        </>
    )
}

