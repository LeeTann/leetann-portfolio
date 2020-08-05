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
                            <p>Hi my name is Lee. I'm a full-stack developer based in California. I love building
                                beautiful and functional apps with cutting edge technologies like
                                ReactJS, NodeJS, Express, PostgreSQL and MongoDB. My current interest are exploring and working with
                                cloud services like AWS. I recently recieved my AWS Cloud Practitioner Certificate and currently
                                studying for on my AWS Solutions Architect Certificate.
                            </p>
                            <p>
                                Being a software engineer and working with tech in general is amazing as there are endless things to learn
                                and drive into. I enjoy solving problems by writing code that can make an impact. 
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
