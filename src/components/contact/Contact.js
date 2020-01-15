import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'
import RubberBand from 'react-reveal/RubberBand'
import './contact.css'

export default function Contact() {
    return (
        <div className="contact">   
            <h3 className="header">Contact</h3>
            <div className="contact-container">
                <p>Connect with me through social media</p>
                <RubberBand>
                    <div className="social-media">         
                        <a href="https://www.linkedin.com/in/lee-tann-9a3769199/" target="_blank" className="fa-linkedin">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/LeeTann" target="_blank" className="fa-github">
                            <FaGithubSquare />
                        </a>
                        <a href="https://twitter.com/LeeTann2" target="_blank" className="fa-twitter">
                            <FaTwitterSquare />
                        </a>         
                    </div>
                </RubberBand>
                <p className="contact-me">Contact me through email</p>
                <a href="mailto:leeroyleeroy18@gmail.com" target="_blank">
                    <button className="btn contact-btn">Email Me</button>
                </a>
            </div>
           
        </div>
    )
}
