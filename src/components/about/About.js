import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import './about.css'

export default function About() {
    return (
        <div className="about">
            <h3>About</h3>
            <div className="about-container">
                <Zoom duration="1200">
                    <p className="quote">"<span className="quote-style">Learning to program is a valuable skill on its own. 
                        On another level, by learning to program and understanding the fundamentals of computer science, 
                        you are receiving the preeminent transferable skill: how to solve any complex problem.</span>" - Lambda School
                    </p>
                </Zoom>
                <div className="about-section">
                    <Fade left duration="1200">
                        <div className="about-me">
                            <p>Hi my name is Lee. I'm a full-stack developer based in California. I enjoy building 
                                functional and aesthetically pleasing apps with cutting edge technologies like
                                ReactJS, NodeJS, Express, PostgreSQL and MongoDB. I am currently diving into cloud services, building 
                                serverless web apps and working on obtaining the AWS Solutions Architect Certification. 
                            </p>
                            <p>
                                Being a software engineer and working with tech is amazing because it allows me to build software which can have
                                a huge impact in the world whilst exploring and tinkering with different technologies.
                                Writing code is a form of expression that allows you to communicate with your machine and with fellow developers.
                                I believe in the Zen of Python - simple is better than complex. 
                            </p>
                            <p>   
                                Impact, Problem Solving and Coding - I wouldn't have it any other way.                     
                            </p>
                        </div>
                    </Fade>
                    <Fade right duration="1200">
                        <div className="pic-container">
                            <img src="images/me7.JPG" alt="porfolio pic" className="portfolio-pic" />
                        </div>
                    </Fade>
                </div>             
            </div>
        </div>
    )
}
