import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className="about">
            <h3>About</h3>
            <div className="about-container">
                <p className="quote">"<span className="quote-style">Learning to program is a valuable skill on its own. 
                    On another level, by learning to program and understanding the fundamentals of computer science, 
                    you are receiving the preeminent transferable skill: how to solve any complex problem.</span>" - Lambda School
                </p>
                <div className="about-section">
                    <div className="about-me">
                        <p>Hi my name is Lee. I'm a full-stack developer based in California. I enjoy building
                            beautiful and functional apps with a focus on user experience and design. I love working with 
                            modern technologies like ReactJS, NodeJS, Express, PostgreSQL and Firebase.
                        </p>
                        <p>
                            Being a software engineer is an amazing profession as it allows you to solve problems
                            by writing code to making an impact. Writing code is a form of expression that allows you 
                            to communicate with your machine and with fellow developers. 
                        </p>
                        <p>   
                            Impact, Problem Solving and Coding - I wouldn't have it any other way.                     
                        </p>
                    </div>
                    <div className="pic-container">
                        <img src="images/me7.JPG" alt="porfolio pic" className="portfolio-pic" />
                    </div>

                </div>             
            </div>
        </div>
    )
}
